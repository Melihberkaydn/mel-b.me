import clsx from "clsx";
import { technology_list } from "../lib/certificates/certificates";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold font-heads text-3xl">Credits</h1>
      <p className="mt-8 text-neutral-800 dark:text-neutral-200 indent-10">
        This page's main frame created from <i>Lee Robinson's</i> open source
        portfolio site. You can find the open source code{" "}
        <b>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/nextjs-portfolio"
          >
            here
          </a>
        </b>
        . And his Website{" "}
        <b>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.io/"
          >
            here
          </a>
        </b>
        .
      </p>
      {technology_list}
    </section>
  );
}
