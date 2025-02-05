import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import SessionWrapper from "../components/SessionWrapper/SessionWrapper"; // Import the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manage Inventory",
  description: "Simple, fast & accurate",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className={`flex flex-col w-screen h-screen pt-[60px]`}>
              {children}
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
