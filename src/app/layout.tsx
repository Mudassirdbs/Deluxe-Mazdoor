import type { Metadata } from "next";
import { Yatra_One, DM_Sans } from "next/font/google";
import "@/styles.css";

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "मज़दूर चौक — Mazdoor Chowk",
  description:
    "Sit at the labour chowk: an illustrated Indian construction-site morning with retro Hindi songs playing and everyone else who's here right now.",
  openGraph: {
    title: "मज़दूर चौक — Mazdoor Chowk",
    description:
      "Sit at the labour chowk: an illustrated Indian construction-site morning with retro Hindi songs playing and everyone else who's here right now.",
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
    <html lang="en" className={`${yatraOne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
