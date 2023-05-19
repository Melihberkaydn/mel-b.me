import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { Teko } from "next/font/google";

type course = {
  cert_name: string;
  link?: string;
};

type specializations = {
  [key: string]: {
    url: string;
    finished: boolean;
    courses: { [key: number]: course };
  };
};

const technology: specializations = {
  "Technologies behind this site::": {
    url: "",
    finished: false,
    courses: {
      1: {
        cert_name:
          "Front-End Web UI Frameworks and Tools: React.js, TailwindCSS, Next.js",
      },
      2: {
        cert_name: "Code Repository: Git, GitHub",
      },
      3: {
        cert_name: "Continuous Deployment & Hosting: Vercel",
      },
    },
  },
};

const pitchdecks: specializations = {
  "Tech Challange 21: Siemens Challenge": {
    url: "https://drive.google.com/file/d/1_B5yC251-DuFf48cOjDOYckYOZUtbCIR/view?usp=share_link",
    finished: true,
    courses: {},
  },
  "Blockchain Prototyping: LUXBLOCK": {
    url: "https://drive.google.com/file/d/1Asvv-kotyy8C6vZCJF1IKMVYFNosJK3b/view?usp=share_link",
    finished: true,
    courses: {},
  },
};

const programming_specs: specializations = {
  "Fundamentals of Computing Specialization (Coursera, Rice University)": {
    url: "https://coursera.org/share/2223b1f1a6c43bc4264c63330dbf830b",
    finished: true,
    courses: {
      1: {
        cert_name: "An Intro. to Interactive Programming in Python (Part 1)",
        link: "https://coursera.org/share/671947c3918e3584f8557802ccf32698",
      },
      2: {
        cert_name: "An Intro. to Interactive Programming in Python (Part 2)",
        link: "https://coursera.org/share/20632964699a0ea1155aa47e4df09ba0",
      },
      3: {
        cert_name: "Principles of Computing (Part 1)",
        link: "https://coursera.org/share/b1e33533213df848315d4100c4ef0baa",
      },
      4: {
        cert_name: "Principles of Computing (Part 2)",
        link: "https://coursera.org/share/a8cb9627eb905c24942262f4dc08eb0d",
      },
      5: {
        cert_name: "Algorithmic Thinking (Part 1)",
        link: "https://coursera.org/share/7479f9683ff649b30e56f770c02cdefb",
      },
      6: {
        cert_name: "Algorithmic Thinking (Part 2)",
        link: "https://coursera.org/share/aa4ac9853cd562c090f756e2dfd51446",
      },
    },
  },
};

const anlytics_specs: specializations = {
  "Machine Learning Specialization (Coursera, Stanford)": {
    url: "https://coursera.org/share/9541fb356757d676b56db3259ea90081",
    finished: true,
    courses: {
      1: {
        cert_name: "Supervised Machine Learning: Regression and Classification",
        link: "https://coursera.org/share/ba8ef736f1b034ff2c1656325a6e794d",
      },
      2: {
        cert_name: "Advanced Learning Algorithms",
        link: "https://coursera.org/share/3e55dd14185916d4046a63727487d761",
      },
      3: {
        cert_name:
          "Unsupervised Learning, Recommenders, Reinforcement Learning",
        link: "https://coursera.org/share/3d1f20a257594da9f6047d50e0ad1bfa",
      },
    },
  },
  "Google Data Analytics Professional Certificate": {
    finished: false,
    url: "",
    courses: {
      1: {
        cert_name: "Foundations: Data, Data, Everywhere",
        link: "https://coursera.org/share/0ce39e6bddfdaa88f28d255546f4d9b7",
      },
      2: {
        cert_name: "Ask Questions to Make Data-Driven Decisions",
        link: "https://coursera.org/share/ee79a0da4022967273a51cc2f70042a5",
      },
      3: {
        cert_name: "Prepare Data for Exploration",
        link: "https://coursera.org/share/34d4fd135e46e86e386f087a0d4aa008",
      },
    },
  },
  "Deep Learning Specialization": {
    url: "",
    finished: false,
    courses: {
      1: {
        cert_name: "Neural Networks and Deep Learning",
        link: "https://coursera.org/share/848344e0e3557d2e13647c81f07868bf",
      },
      2: {
        cert_name:
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        link: "https://coursera.org/share/29cb8758fa5da57d4c1c1237f9736e88",
      },
      3: {
        cert_name: "Structuring Machine Learning Projects",
        link: "https://coursera.org/share/bd82c3c6bad9e1384ff989145c400931",
      },
    },
  },
  "Other Certificates": {
    url: "",
    finished: false,
    courses: {
      1: {
        cert_name: "Data Analysis with Python",
        link: "https://coursera.org/share/ad208dac5e223e9898c3350820f6209d",
      },
      2: {
        cert_name:
          "Intro. to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        link: "https://coursera.org/share/464f23d9b4336c6713e0f289c1647c76",
      },
    },
  },
};

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: "500",
  style: "normal",
});

export function List({
  key,
  url = "",
  certName,
}: {
  key?: string;
  url?: string;
  certName: string;
}) {
  return (
    <li
      key={key}
      className={clsx(
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px] text-lg align-text-top list-disc"
      )}
    >
      {" "}
      {url == "" ? (
        <p>{certName} </p>
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {certName}
        </a>
      )}
    </li>
  );
}

function Specialization({ spec }: { spec: specializations }) {
  var speclist = (
    <ul className={clsx(teko.className, "my-6 ml-6 list-outside list-none")}>
      {Object.entries(spec).map(([spec, obj]) => (
        <div className="mb-3" key={uuidv4()}>
          <li className="text-2xl">
            {obj.finished ? (
              <a target="_blank" rel="noopener noreferrer" href={obj.url}>
                <h4 className={clsx(teko.className, "text-xl underline")}>
                  {spec}
                </h4>
              </a>
            ) : (
              <h4
                className={clsx(
                  teko.className,
                  "text-xl",
                  obj.finished && "underline"
                )}
              >
                {spec}
              </h4>
            )}
          </li>
          <ul className={clsx(teko.className, "list-outside")}>
            {Object.entries(obj.courses).map(([key, course]) => (
              <div key={key} className=" ml-2 w-full flex flex-col">
                <List url={course.link} certName={course.cert_name} />
              </div>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  );
  return speclist;
}

export const al_specs_list = Specialization({ spec: anlytics_specs });
export const prog_specs_list = Specialization({ spec: programming_specs });
export const pitchdecks_list = Specialization({ spec: pitchdecks });
export const technology_list = Specialization({ spec: technology });
