import { Nunito, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavParent from "./nav/navparent";
import { Toaster } from "sonner";
import Script from "next/script";

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
  title: "Jon Coronel - Portfolio",
  description: "Jonathan Coronel's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`relative ${nunito.variable} ${atkinson.variable} bg-primary-800`}
    >
      <body className="bg-primary-800">
        <Providers>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "!shadow-md",
              classNames: {
                title: "text-p-small",
              },
            }}
          />
          <NavParent />

          <main className="relative flex min-h-screen flex-col items-center justify-between   text-secondary">
            {children}
          </main>
          <footer className="flex w-full items-center justify-center border-t border-primary-500 p-6">
            <p className="text-center text-secondary">
              Built by Jonathan Coronel &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </Providers>
      </body>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="44f93001-e590-4d81-b637-50e14a269151"
        strategy="afterInteractive"
      />

      {/* <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="a33dc8c2-33ae-44b0-9e87-e3523e69b4c5"
        async
        strategy="afterInteractive"
      /> */}
    </html>
  );
}
