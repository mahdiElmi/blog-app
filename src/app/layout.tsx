import Navbar from "@/components/Navbar";
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
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center px-5 text-gray-900`}
      >
        <Navbar />
        <main className="flex h-full w-full max-w-7xl flex-grow flex-col">
          {children}
        </main>
        <footer className="border-t border-gray-300 py-7">
          <div className="mx-auto flex h-full w-screen max-w-7xl items-center justify-center">
            © 2023 BlogSphere
          </div>
        </footer>
      </body>
    </html>
  );
}
