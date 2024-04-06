import Overman from "@/public/images/projects/overman.webp";
import PulseButton from "@/app/components/ui/PulseButton";
import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiRadixui,
} from "react-icons/si";

import Carousel from "../carousel";

const LogoSize = "1.75rem";

const images = [
  { label: "Overman Home Page", src: Overman },
  { label: "Overman Nexus", src: Overman },
  { label: "Overman Nexus", src: Overman },
];

const OPTIONS = {};

const buttons = () => {
  return (
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
  );
};

export default function OvermanProject() {
  return (
    <section className=" mx-auto mb-[8rem] mt-40 flex w-full max-w-7xl flex-col items-center gap-20 px-4">
      <h2 className="flex justify-center text-4xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        Advanced Car Creations
      </h2>
      <Carousel images={images} options={OPTIONS}>
        {buttons()}
      </Carousel>

      <div className="flex max-w-4xl flex-col flex-wrap justify-center gap-8">
        <p className=" text-primary-100">
          Advanced Car Creations is a marketing website for a car electronics
          and accessories company. The previous website was over 20 years old
          and needed a complete overhaul. The shop prefers not to sell online,
          so the website is focused on showcasing their products and services.
        </p>

        <p className="text-primary-100">
          The idea for the website was to create a modern and clean design that
          was easy to navigate and showcased the products and services offered.
        </p>
        <div className="text-primary-100">
          <h3 className="mb-4 text-lg font-bold text-secondary-500">
            Core Features:
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-medium text-secondary-500">
                Product Showcase:{" "}
              </span>
              The website showcases the products and services offered by the
              shop.
            </li>
            <li>
              <span className="font-medium text-secondary-500">
                Contact and Location Information:{" "}
              </span>
              The website features a contact form for customers to reach out to
              the shop. It supports sending emails directly to the shop&apos;s
              email and uses google&apos;s maps api to render a visual map of
              the shop&apos;s location.
            </li>
          </ul>
        </div>
        <div className="font-nunito text-sm text-secondary-100">
          <h3 className="mb-4 text-lg font-bold text-secondary-500 ">
            Technologies Used:
          </h3>
          <ul className="flex flex-row flex-wrap gap-6 ">
            <li className="flex flex-col items-center gap-2 ">
              <SiNextdotjs size={LogoSize} className="text-secondary-500" />
              Next.js
            </li>

            <li className="flex flex-col items-center gap-2 ">
              <SiTailwindcss size={LogoSize} className="text-secondary-500" />
              Tailwind
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiFramer size={LogoSize} className="text-secondary-500" />
              Motion
            </li>
            <li className="flex flex-col items-center gap-2 ">
              <SiRadixui size={LogoSize} className="text-secondary-500" />
              Radix UI
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
