import "./globals.css";
import type { Metadata } from "next";
import { raleway } from "./lib/fonts";
import { sharedMetadata } from "@/shared-metadata";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} min-h-screen flex flex-col flex-1`}
      >
        <Header />
        <div className="background">
          <div className="gradient-blur" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
