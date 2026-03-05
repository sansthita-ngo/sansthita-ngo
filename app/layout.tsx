import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/*
  Global SEO Metadata
  -------------------
  Controls browser tab title, description,
  keywords and social media preview.
*/

export const metadata = {
  title: {
    default: "Sansthita NGO",
    template: "%s | Sansthita NGO",
  },

  description:
    "Sansthita is a registered non-profit organization working to protect vulnerable individuals, empower women and support underprivileged communities.",

  keywords: [
    "NGO Kolkata",
    "Women empowerment NGO",
    "Domestic violence support",
    "Community NGO India",
    "Sansthita NGO",
    "NGO in kalindi",
    "NGO in laketown",
    "Children help kolkata",
    "Children help kalindi laketown",
  ],

  openGraph: {
    title: "Sansthita NGO",
    description:
      "Sansthita stands against violence and injustice. Supporting vulnerable communities and empowering women.",
    url: "https://sansthita.org",
    siteName: "Sansthita",

    images: [
      {
        url: "/images/all/Sansthita office and members 01.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Top NGO banner */}
        <TopBanner />

        {/* Main navigation */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
