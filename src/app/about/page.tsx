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
      <h1 className="font-bold font-heads text-3xl">About me</h1>
      <p className="mt-8 text-neutral-800 dark:text-neutral-200">
        Hello and welcome! My name is Melih and I'm originally from Istanbul,
        Turkey, but currently living in <b>Munich, Germany</b>. I'm pursuing my
        Master's degree while also working as a
        <b> Database Developer Werkstudent at Infineon</b>. Here is a background
        music that I listened repeatedly when I was developing this page.
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
        As someone who's always had a passion for technology and data analysis,
        I'm constantly looking for ways to expand my skills and knowledge.
        That's why I'm currently dedicating a lot of my free time to learning
        about software and machine learning. My ultimate goal is to become a{" "}
        <b>Machine Learning Engineer</b>, and I'm excited to see where this
        journey will take me.
      </p>
      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        When I'm not studying or working, I love spending time outdoors and
        being active. <i>Hiking and snowboarding</i> are two of my favorite
        activities, and I find that being in nature helps me recharge and stay
        focused.
      </p>
      <hr className="h-px my-6 bg-gray-400  border-0 dark:bg-grey-200"></hr>
      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        On this website, you'll find a variety of content related to my
        interests and passions. Whether you're interested in technology, sports,
        or simply looking for some inspiration, I hope that my website will
        provide you with some valuable insights and ideas.
      </p>
      <p className="mt-5 text-neutral-800 dark:text-neutral-200">
        <b>
          Thanks for stopping by, and feel free to reach out if you have any
          questions or comments. I'd love to connect with you!
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
