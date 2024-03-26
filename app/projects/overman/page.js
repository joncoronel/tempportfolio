import Image from "next/image";
import Overman from "@/public/images/projects/overman.webp";
import PulseButton from "@/app/components/ui/PulseButton";
import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiFramer,
} from "react-icons/si";

import NextAuthLogo from "./logo";

const LogoSize = "2rem";

export default function OvermanProject() {
  return (
    <section className=" mx-auto mb-[8rem] mt-44 flex w-full max-w-7xl flex-col items-center gap-20 px-4">
      <h2 className="flex justify-center text-4xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        Overman
        <span className="text-primary-500">.</span>
        <span className="text-primary-300">Nexus</span>
      </h2>

      <div className="flex max-w-2xl flex-col gap-6">
        <Image
          src={Overman}
          alt="Overman"
          priority
          placeholder="blur"
          className="overflow-clip rounded-md shadow-card"
        />
        <div className="flex gap-4 self-end">
          <PulseButton
            variant="secondary"
            aria-label={"View Project"}
            href="https://overman.nexus"
          >
            View Live Site
          </PulseButton>
          <PulseButton
            aria-label={"View Code"}
            href="https://www.github.com/joncoronel"
          >
            View Code
          </PulseButton>
        </div>
      </div>
      <div className="flex max-w-4xl flex-col flex-wrap justify-center gap-8">
        <p className=" text-secondary-100">
          Overman Nexus is a Overwatch 2 stats platform that allows players to
          record their stats, compare with other players, and view their
          progress over time. The platform is built with Next.js and Supabase
          for the backend.
        </p>

        <p className="text-secondary-100">
          The idea for Overman Nexus came about after existing stat tracking
          solutions were missing key features, mainly the ability to track stats
          over time. So I set out to build a platform focused mainly on that
          missing functionality.
        </p>
        <div className="text-secondary-100">
          <h3 className="mb-4 text-lg font-bold">Core Features:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <span className=" font-medium text-secondary-500">
                Record Player Stats:{" "}
              </span>
              Records individual player stats on-demand and stores the session
              stats on a daily basis.
            </li>
            <li>
              <span className="font-medium text-secondary-500">
                Compare Stats:{" "}
              </span>
              Players can compare their stats with other players to see how they
              stack up.
            </li>
            <li>
              <span className="font-medium text-secondary-500">
                Progress Tracking:{" "}
              </span>
              Players are able to view their progress over time and see how they
              played compared to previous dates/sessions.
            </li>
          </ul>
        </div>
        <div className="font-nunito text-sm text-secondary-100">
          <h3 className="mb-4 text-lg font-bold ">Technologies Used:</h3>
          <ul className="flex flex-row flex-wrap gap-6 ">
            <li className="flex flex-col items-center gap-2 ">
              <SiHtml5 size={LogoSize} className="text-secondary-500" />
              HTML
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiCss3 size={LogoSize} className="text-secondary-500" />
              CSS
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiNextdotjs size={LogoSize} className="text-secondary-500" />
              Next.js
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <NextAuthLogo size={LogoSize} />
              NextAuth
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiSupabase size={LogoSize} className="text-secondary-500" />
              Supabase
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiFramer size={LogoSize} className="text-secondary-500" />
              Motion
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
