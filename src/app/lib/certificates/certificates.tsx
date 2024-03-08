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
    desc?: string;
  };
};

const programming: specializations = {
  "Predicting Emergency Department Access Block to Alleviate Overcrowding": {
    url: "https://drive.google.com/file/d/1r4FEdTckrBI5XAA57dhTO_EUwXkvWKQF/view?usp=drive_link",
    finished: true,
    courses: {},
    desc: "Developed a time series prediction model using Python (Pandas, sci-kit-learn, Darts) to forecast daily access blocked patient amounts (patients unable to be admitted from the ED to wards). Achieved model accuracy with an average prediction error of 2.4 individuals, aiding in mitigating ED overcrowding.",
  },
  "CreditWise: Credit Scoring Service": {
    url: "https://github.com/Melihberkaydn/CreditWise",
    finished: true,
    courses: {},
    desc: "React Front-End Application of CreditWise. Easy-to-use UI expedites the decision-making processes, aiding financial advisors/managers in their decisions.",
  },
  "Post-It: Note Taking App": {
    url: "https://melihberkaydn.github.io/Note-Taking-App/",
    finished: true,
    courses: {},
    desc: "Note app with various features such as dark mode, Pinned notes, restricted note character count. Created by react and react hooks, such as Context, state, reducer and Effect.",
  },
};

const technology: specializations = {
  "Technologies behind this site:": {
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

const reports: specializations = {
  "South Tyrol Apple Value Chain Consultancy Report": {
    url: "https://drive.google.com/file/d/1jOVLn_nLwd2b2TFPtSVyaYfbdh0WZ4TP/view?usp=drive_link",
    finished: true,
    courses: {},
  },
  "Standards Wars Strategies in smart home market": {
    url: "https://drive.google.com/file/d/1XrEPF-GAKlQ5uxEZvfH2OoYamwdilOfi/view?usp=sharing",
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
      4: {
        cert_name: "Convolutional Neural Networks",
        link: "https://coursera.org/share/1bfc31f71f736efd1e31dfb224548bf2",
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
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px] align-text-top list-disc"
      )}
    >
      {" "}
      {url == "" ? (
        <p>{certName} </p>
      ) : (
        <a
          href={url}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {certName}
        </a>
      )}
    </li>
  );
}

function Specialization({ spec }: { spec: specializations }) {
  var speclist = (
    <ul className={clsx("my-6 ml-6 list-outside list-none")}>
      {Object.entries(spec).map(([spec, obj]) => (
        <div className="mb-3" key={uuidv4()}>
          <li className="">
            {obj.finished ? (
              <a target="_blank" rel="noopener noreferrer" href={obj.url}>
                <h4 className={clsx("underline mt-8 font-bold")}>{spec}</h4>
              </a>
            ) : (
              <>
                <h4 className="font-bold mt-8">{spec}</h4>
              </>
            )}
          </li>
          <ul className={clsx("list-outside")}>
            <p className="my-2 text-neutral-800 dark:text-neutral-200">
              {" "}
              {obj.desc}
            </p>
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
export const report_list = Specialization({ spec: reports });
export const technology_list = Specialization({ spec: technology });
export const programming_list = Specialization({ spec: programming });
