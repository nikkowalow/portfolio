import "./globals.css";
import "@/styles/fonts.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Nikko Kowalow",
  description: "Dev portfolio.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="logo" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
