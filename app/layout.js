import { Nunito, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavParent from "./nav/navparent";
import { Toaster } from "sonner";
// import Script from "next/script";
import { OpenPanelComponent } from "@openpanel/nextjs";

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
      {/* <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="44f93001-e590-4d81-b637-50e14a269151"
        strategy="afterInteractive"
      /> */}
      <OpenPanelComponent
        clientId="8beeb76b-7fed-4c16-8022-cb7fd7306cb0"
        trackScreenViews={true}
        // trackAttributes={true}
        // trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
    </html>
  );
}
