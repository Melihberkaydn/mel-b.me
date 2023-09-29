"use client";
import clsx from "clsx";
import { Teko } from "next/font/google";
import { useState } from "react";
import { Up, Down } from "../lib/Icons/Icons";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: "500",
  style: "normal",
});

const Header = ({
  children,
  name,
  textUp = true,
  size = "text-2xl",
  img,
  expand = false,
  indent,
}: {
  children: React.ReactNode;
  name: string;
  textUp?: boolean;
  size?: string;
  img: React.ReactNode;
  expand?: boolean;
  indent?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(expand);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={clsx("mt-3", indent)}>
      <div
        className="hover:opacity-75 cursor-pointer"
        onClick={toggleAccordion}
      >
        {isExpanded ? <Up /> : <Down />}
        {img}
        <h3
          className={clsx(
            teko.className,
            "font-bold inline-block mx-2 font-list",
            textUp && "align-text-top",
            size
          )}
        >
          {name}
        </h3>
      </div>

      <div
        className={clsx(
          "transition-all ease-in-out duration-500 overflow-hidden",
          isExpanded ? "max-h-[150vh]" : "max-h-0"
        )}
      >
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Header;
