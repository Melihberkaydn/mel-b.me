import { Fragment, ReactElement, FC } from "react";
import Header from "../components/AccordionHeader";
import {
  AI,
  Prog,
  CertificateIcon,
  DeckIcon,
  Report,
  Software,
} from "../lib/Icons/Icons";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Various Certificates and Projects",
};

import {
  prog_specs_list,
  al_specs_list,
  pitchdecks_list,
  report_list,
  programming_list,
} from "../lib/certificates/certificates";

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
        <Header
          img={<Software />}
          name="ML / Software Projects"
          size="text-3xl"
          expand={true}
        >
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            Here is the showcase of my ml and software projects.
          </p>
          {programming_list}
        </Header>

        <Header img={<Report />} name="Papers/Reports" size="text-3xl">
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            Here are the research and consultation reports that we created
            during different studies.
          </p>
          {report_list}
        </Header>

        <Header img={<DeckIcon />} name="Pitch Decks" size="text-3xl">
          <p className="my-5 text-neutral-800 dark:text-neutral-200">
            Here are the pitch decks we created on different courses at TUM.
          </p>
          {pitchdecks_list}
        </Header>
        <Header
          img={<CertificateIcon />}
          name="Certificates & Specs"
          size="text-3xl"
        >
          <p className="my-4 text-neutral-800 dark:text-neutral-200">
            Here you can find my certificates. You can click and see on the
            coursera or as pdf on another tab.
          </p>
          <Header
            img={<AI />}
            expand={true}
            indent="ml-8"
            name="Analytics & ML/DL"
          >
            {al_specs_list}
          </Header>

          <Header
            img={<Prog />}
            expand={true}
            indent="ml-8"
            name="Programming"
            textUp={true}
          >
            {prog_specs_list}
          </Header>
        </Header>
      </div>
    </Fragment>
  );
}
