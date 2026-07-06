import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { segment, concern, triedOther, scienceImportance, priceIntent, firstName, email } = body;

    // Validate required fields
    if (!email || !firstName) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const { error } = await supabase.from("lightvib_waitlist").insert({
      first_name: firstName,
      email: email.toLowerCase().trim(),
      segment,
      concern,
      tried_other: triedOther,
      science_importance: scienceImportance,
      price_intent: priceIntent,
      created_at: new Date().toISOString(),
    });

    if (error) {
      // If duplicate email, still return success (soft duplicate handling)
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Could not save your info." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
