import "./globals.css";


export const metadata = {
  title: "Halo | Event Ticketing Platform",
  description: "Seamless event creation and ticketing in one app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
