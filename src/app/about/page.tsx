import {
  LinkedInIcon,
  GitHubIcon,
  ArrowIcon,
  InstagramIcon,
} from "../lib/Icons/Icons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Database Developer Werkstudent in Infineon.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold font-heads text-3xl">About Me</h1>
      <p className="mt-8 text-neutral-800 dark:text-neutral-200">
        Greetings! I'm Melih, hailing from the vibrant city of Istanbul, Turkey,
        and currently embracing the rich culture of <b>Munich, Germany</b>. As I
        navigate through my Master's program, I'm also honing my skills as a{" "}
        <b>Database Developer Werkstudent at Infineon</b>. While crafting this
        page, there was one particular track that became the soundtrack of my
        development process — perhaps you have your own go-to music that fuels
        your creativity?
      </p>
      <iframe
        className="border-12 mt-8 rounded"
        src="https://open.spotify.com/embed/track/1Mz7BniVXWXwaif4Dd0D6K?utm_source=generator&theme=1"
        width="100%"
        height="100"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        My enthusiasm for technology and data analysis knows no bounds. I'm on a
        perpetual quest to broaden my technical skillset, with a keen focus on
        business analytics and decision-making. My ambition is to meld my
        technical prowess with business insight, acting as a conduit between the
        realms of technological innovation and strategic growth. I'm on the
        lookout for challenges that foster my development and allow me to make a
        meaningful contribution. The anticipation of where this path leads is
        exhilarating.
      </p>
      <hr className="h-px my-6 bg-gray-400 border-0 dark:bg-grey-200"></hr>
      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        Away from the world of data and algorithms, I find solace in the great
        outdoors. Whether it's <i>hiking through rugged terrains</i> or{" "}
        <i>carving slopes on my snowboard</i>, embracing nature is my way of
        rejuvenating my spirit and maintaining focus.
      </p>

      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        <b>
          Thank you for visiting! I'm always open to questions, comments, or a
          friendly chat. Don't hesitate to reach out — let's connect and share
          our journeys!
        </b>
      </p>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-6">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/melih-berkay-aydin/"
          className="flex w-full border border-neutral-400 dark:border-white  rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <LinkedInIcon />
            <div className="ml-3">LinkedIn</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Melihberkaydn"
          className="flex w-full border border-neutral-400 dark:border-white  rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/melihberkaydn/"
          className="flex w-full border border-neutral-400 dark:border-white rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <InstagramIcon />
            <div className="ml-3">Instagram</div>
          </div>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
