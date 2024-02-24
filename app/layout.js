import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import HeaderParent from "./header/headerparent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HeaderParent />

          <main className="flex relative min-h-screen flex-col items-center justify-between p-24  bg-background text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
