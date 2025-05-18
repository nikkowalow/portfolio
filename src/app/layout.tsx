import "./globals.css";


export const metadata = {
  title: "Nikko Kowalow",
  description: "Dev portfolio.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
            <link rel="logo" href="/logo.png" />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
