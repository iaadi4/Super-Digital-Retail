import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://superdigitalretail.in"),
  title: {
    default: "Super Digital Retail — Discover the Best Deals on Flipkart",
    template: "%s | Super Digital Retail",
  },
  description:
    "Compare prices, read real ratings, and discover top products across Electronics, Home Decor, Kitchen, and more. Buy on Flipkart at the best prices.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Super Digital Retail",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body min-h-screen flex flex-col antialiased bg-[#FFFFFF] text-[#111111]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col pt-[100px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
