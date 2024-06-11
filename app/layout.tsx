import { Noto_Serif } from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-providers";
import ToastProvider from "@/providers/toast-provider";

import type { Metadata } from "next";
import "./globals.css";


const font = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/> {/* for overview of products */}
        <ToastProvider/> {/* for addtocart of products */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
