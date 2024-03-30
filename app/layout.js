
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kent | Design",
  description: "Multidisciplinary Developer & Designer passionate about crafting immersive digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-n-8 text-black dark:text-gray-100  {inter.className}`}>
      {children}
      </body>
    </html>
  );
}
