import { Nunito, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import HeaderParent from "./header/headerparent";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${atkinson.variable}`}>
      <body className=" bg-primary-800">
        <Providers>
          <HeaderParent />

          <main className="flex relative min-h-screen flex-col items-center justify-between   text-secondary">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
