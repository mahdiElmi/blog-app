import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogSphere: Discover, Engage, and Explore Engaging Articles",
  description:
    "Discover insightful and engaging articles on our blog app. Our platform offers a user-friendly interface, allowing you to seamlessly navigate through the latest posts and curated content. Immerse yourself in thought-provoking articles written by talented authors and experts in their respective fields. Stay informed, inspired, and entertained with our blog app, your go-to destination for quality content and meaningful discussions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
