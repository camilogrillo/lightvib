import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lightvib.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://lightvib.com/krea-led-closeup.png",
        "https://lightvib.com/krea-front-glow.png",
        "https://lightvib.com/krea-side-dramatic.png",
        "https://lightvib.com/krea-box-product.png",
        "https://lightvib.com/krea-woman-eyes-closed.png",
        "https://lightvib.com/krea-woman-candles.png",
        "https://lightvib.com/krea-woman-window.png",
        "https://lightvib.com/krea-woman-holding.png",
        "https://lightvib.com/krea-controls-detail.png",
        "https://lightvib.com/krea-full-side.png",
        "https://lightvib.com/product-closeup.png",
        "https://lightvib.com/product-side.png",
        "https://lightvib.com/product-diagram.png",
      ],
    },
  ];
}
