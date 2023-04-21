import { Fragment, ReactElement, FC } from "react";
import { Teko } from "next/font/google";
import clsx from "clsx";
import { AI, Prog, CertificateIcon, DeckIcon } from "../lib/Icons/Icons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Various Certificates and Projects",
};

import {
  prog_specs_list,
  al_specs_list,
  pitchdecks_list,
} from "../lib/certificates/certificates";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: "500",
  style: "normal",
});

const Headers = ({
  children,
  name,
  textUp = true,
  size = "text-2xl",
}: {
  children: React.ReactNode;
  name: string;
  textUp?: boolean;
  size?: string;
}) => {
  return (
    <div>
      {children}
      <h3
        className={clsx(
          teko.className,
          "font-bold inline-block mx-3 font-list",
          textUp && "align-text-top",
          size
        )}
      >
        {name}
      </h3>
    </div>
  );
};

/*
 */

export default function PorfolioPage() {
  return (
    <Fragment>
      <h1 className="font-bold font-heads text-3xl">Portfolio</h1>
      <div className="">
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          I'm thrilled to share my professional achievements with you. Here is
          another track that you can try while taking a look:
        </p>

        <iframe
          className=" rounded"
          src="https://open.spotify.com/embed/track/1W6bam6ERzqyP064EMwJnv?utm_source=generator&theme=1"
          width="100%"
          height="100"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <hr className="h-px my-6 bg-gray-400  border-0 dark:bg-grey-200"></hr>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Throughout my academic and professional journey, I've always been
          passionate about learning and expanding my skill set. That's why I've
          earned a variety of certificates in my field of expertise, from
          programming and data analysis to entrepreneurship. I believe that my
          certificates not only showcase my commitment to continuous learning,
          but also demonstrate my dedication to delivering high-quality work and
          achieving my professional goals.
        </p>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          This portfolio page features a comprehensive collection of all my
          certificates, which I hope will give you a better understanding of my
          skills and qualifications. Whether you're a potential employer,
          colleague, or simply someone interested in learning more about me, I
          hope that this portfolio page will provide you with valuable insights.
          Thank you for taking the time to visit my portfolio page, and please
          feel free to reach out to me if you have any questions or would like
          to learn more about my work.
        </p>
        <Headers name="Pitch Decks" size="text-3xl">
          <DeckIcon />
        </Headers>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Here are the pitch decks we created on different courses at TUM.
        </p>
        {pitchdecks_list}
        <Headers name="Certificates & Specs" size="text-3xl">
          <CertificateIcon />
        </Headers>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Here you can find my certificates. You can click and see on the
          coursera or as pdf on another tab.
        </p>
        <Headers name="Analytics & ML/DL">
          <AI />
        </Headers>
        {al_specs_list}
        <Headers name="Programming" textUp={false}>
          <Prog />
        </Headers>
        {prog_specs_list}
      </div>
    </Fragment>
  );
}
