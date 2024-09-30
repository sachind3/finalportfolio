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
  title: "Create Next App",
  description: "Generated by create next app",
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
