import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppLayout from "@/components/AppLayout";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata = {
  metadataBase: new URL("https://sachindesai.in/"),
  title: {
    default: "Sachin Desai • Frontend Developer",
  },
  description:
    "Empowering businesses with custom digital solutions. Based in The India - Mumbai, I create bespoke designs and build engaging, fully interactive websites from the ground up. Developed by Sachin Desai",
  openGraph: {
    title: "Sachin Desai • Frontend Developer",
    description:
      "Empowering businesses with custom digital solutions. Based in The India - Mumbai, I create bespoke designs and build engaging, fully interactive websites from the ground up. Developed by Sachin Desai",
    type: "website",
    locale: "en_US",
    url: "https://sachindesai.in/",
    siteName: "Sachin Desai",
    images: [
      {
        url: "https://sachindesai.in/sachindesai.jpg",
        width: 1200,
        height: 630,
        alt: "Sachin Desai Portfolio",
      },
    ],
    author: "Sachin Desai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Desai • Frontend Developer",
    description:
      "Empowering businesses with custom digital solutions. Based in Mumbai, India, I create bespoke designs and build engaging, fully interactive websites from the ground up. Developed by Sachin Desai",
    images: [
      {
        url: "https://sachindesai.in/sachindesai.jpg",
        alt: "Sachin Desai Portfolio",
      },
    ],
    site: "@sachind3",
    creator: "@sachind3",
    creatorName: "Sachin Desai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="canonical" href="https://sachindesai.in" />
      <meta
        name="google-site-verification"
        content="EwD1tctBgW0wQUeEXzHYiWOy2PzumKAT4SHnMo4S6S8"
      />
      <body
        className={`${roboto.variable} ${oswald.variable} antialiased`}
        suppressHydrationWarning
      >
        <ScrollToTop />
        <AppLayout>
          <Header />
          <div className="pagelines">
            <div className="pageline"></div>
            <div className="pageline"></div>
            <div className="pageline"></div>
            <div className="pageline"></div>
            <div className="pageline"></div>
          </div>
          {children}
          <Footer />
        </AppLayout>
        <Analytics />
      </body>
    </html>
  );
}
