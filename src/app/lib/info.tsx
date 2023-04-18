import { Fragment } from "react";
import me from "./avatar.jpg";

export const name = "Melih Berkay Aydin";
export const avatar = me;
export const about = () => {
  return (
    <>
      Hi there! I am a master's student at the{" "}
      <b>Technical University of Munich</b>, working part time as{" "}
      <b>Database Developer</b> at <b>Infineon</b>.
    </>
  );
};
<ul className="my-6 list-disc ml-5 space-y-1 ">
  <li>TUMai Makeathon</li>
  <li>Innovation Sprint</li>
  <li>Think Make & Start</li>
</ul>;

export const bio = () => {
  return (
    <div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        I developed this website to create a showcase for the event and future
        job applications. Next events that I would like to participate:
      </p>
      <ul className="my-6 list-disc ml-5 space-y-1 ">
        <li>TUMai Makeathon</li>
        <li>Innovation Sprint</li>
        <li>Think Make & Start</li>
      </ul>
    </div>
  );
};
