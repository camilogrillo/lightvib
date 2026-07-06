import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MC_API_KEY = process.env.MAILCHIMP_API_KEY!;
const MC_LIST_ID = process.env.MAILCHIMP_LIST_ID!;
// Derive the data center from the API key (e.g. "us12" from "xxx-us12")
const MC_SERVER = MC_API_KEY?.split("-").pop() ?? "us12";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { segment, concern, triedOther, scienceImportance, priceIntent, firstName, email } = body;

    if (!email || !firstName) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const emailLower = email.toLowerCase().trim();
    const subscriberHash = crypto.createHash("md5").update(emailLower).digest("hex");

    // Upsert member (PUT so existing contacts just get updated)
    const memberRes = await fetch(
      `https://${MC_SERVER}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${MC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: emailLower,
          status_if_new: "subscribed",
          merge_fields: {
            FNAME: firstName,
            // Store questionnaire answers in merge fields
            SEGMENT: segment ?? "",
            CONCERN: concern ?? "",
            TRIED: triedOther ?? "",
            SCIENCE: String(scienceImportance ?? ""),
            PRICE: priceIntent ?? "",
          },
        }),
      }
    );

    if (!memberRes.ok) {
      const err = await memberRes.json();
      console.error("Mailchimp member error:", err);
      return NextResponse.json({ error: "Could not save your info." }, { status: 500 });
    }

    // Add the "lightvib" tag
    await fetch(
      `https://${MC_SERVER}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members/${subscriberHash}/tags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tags: [{ name: "lightvib", status: "active" }],
        }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
