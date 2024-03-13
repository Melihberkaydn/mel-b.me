import { Fragment } from "react";
import me from "./avatar.jpg";

export const name = "Melih Berkay Aydin";
export const avatar = me;
export const about = () => {
  return (
    <Fragment>
      <p className="my-3">
        Greetings! I'm Melih, navigating through the intricate world of data at
        the intersection of <b>Industrial Engineering</b> and <b>Informatics</b>
        , all while exploring the charming city of <b>Munich</b>
      </p>
      <p className="my-3">
        Currently, I’m diving deep into advanced studies at{" "}
        <b>the Technical University of Munich</b> and contributing to the
        digitalization wave at <b> Infineon</b> as
        <b> Software Engineer</b>. My journey in Industrial Engineering has
        fueled my fascination for data-driven strategies, especially in
        optimizing operational processes and unveiling actionable insights.
      </p>
      <p className="my-3">
        In the vibrant classrooms of Munich, my master’s program has been a
        playground of knowledge, covering a spectrum from software engineering
        and functional programming to the realms of deep learning. Every subject
        is a step closer to melding management acumen with tech-savvy insights!
      </p>
      <p className="my-3">
        Curious to explore collaborations or simply chat about the endless
        possibilities in the data universe? Feel free to reach out – I’d love to
        connect!
      </p>
    </Fragment>
  );
};
