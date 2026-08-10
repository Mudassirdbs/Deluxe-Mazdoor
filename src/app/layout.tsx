import type { Metadata } from "next";
import { Yatra_One, DM_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import "@/styles.css";

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-display",
  display: "swap",
});

const notoUrdu = Noto_Nastaliq_Urdu({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مزدور چوک — Mazdoor Chowk",
  description:
    "Sit at the labour chowk: an illustrated Indian construction-site morning with retro background music playing and everyone else who's here right now.",
  other: {
    google: "notranslate",
  },
  openGraph: {
    title: "مزدور چوک — Mazdoor Chowk",
    description:
      "Sit at the labour chowk: an illustrated Indian construction-site morning with retro background music playing and everyone else who's here right now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ur"
      translate="no"
      className={`notranslate ${yatraOne.variable} ${notoUrdu.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="antialiased notranslate" translate="no" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
