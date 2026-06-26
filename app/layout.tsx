import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
