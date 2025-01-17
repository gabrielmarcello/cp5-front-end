import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export const metadata: Metadata = {
  title: "PetShop Cão Lindão",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
