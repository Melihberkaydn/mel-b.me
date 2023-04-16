import { Fragment } from "react";
import { Teko } from "next/font/google";
import clsx from "clsx";
import { AI } from "../lib/Icons/AI-Icon";
import { Prog } from "../lib/Icons/Prog-Icon";
import { Bullet } from "../lib/Icons/Bullet";
import {
  deepl_spec_list,
  foc_list,
  google_list,
  others_list,
} from "../lib/certificates/certificates";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: "500",
  style: "normal",
});

export default function PorfolioPage() {
  return (
    <Fragment>
      <h1 className="font-bold font-heads text-3xl">Portfolio</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Currently Devoloping here... Check back later!
      </p>
      <h2 className={clsx(teko.className, "font-bold text-2xl")}>
        Certificates & Specializations
      </h2>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Here you can find my certificates. You can click and download.
      </p>
      <div>
        <AI />
        <h3
          className={clsx(
            teko.className,
            "font-bold inline-block align-text-top mx-3 underline font-list text-2xl"
          )}
        >
          Analytics & ML/DL
        </h3>
      </div>
      <ul className={clsx(teko.className, "my-6 list-outside")}>
        {others_list}
        <li className="list-disc">
          <h4 className={clsx(teko.className, "text-xl ")}>
            Deep Learning Specialization (Coursera, deeplearning.ai)
          </h4>
        </li>
        <ul className={clsx(teko.className, "list-outside")}>
          {deepl_spec_list}
        </ul>
        <li className="list-disc">
          <h4 className={clsx(teko.className, "text-xl ")}>
            Google Data Analytics Professional Certificate
          </h4>
        </li>
        <ul className={clsx(teko.className, "list-outside")}>{google_list}</ul>
      </ul>
      <div>
        <Prog />
        <h3
          className={clsx(
            teko.className,
            "font-bold inline-block align-text mx-3 underline font-list text-2xl"
          )}
        >
          Programming
        </h3>
      </div>
      <ul className={clsx(teko.className, "my-6 list-outside list-disc")}>
        <a href="https://coursera.org/share/2223b1f1a6c43bc4264c63330dbf830b">
          <li>
            <h4 className={clsx(teko.className, "text-xl")}>
              Fundamentals of Computing Specialization (Coursera, Rice
              University)
            </h4>
          </li>
        </a>
        <ul className={clsx(teko.className, "list-outside")}> {foc_list}</ul>
      </ul>
    </Fragment>
  );
}
