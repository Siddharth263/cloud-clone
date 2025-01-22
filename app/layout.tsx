import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900'],
  subsets: ["latin" , "latin-ext"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Cloud It",
  description: "Cloud storage Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiasing`}>{children}</body>
    </html>
  );
}
