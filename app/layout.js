import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppLayout from "@/components/AppLayout";
import ScrollToTop from "@/components/ScrollToTop";

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
  // title: "Dev Blook - A blog for developers",
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
    siteName: "sachindesai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
