import clsx from "clsx";

export const fund_of_computing = {
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
};

export const foc_list = Object.entries(fund_of_computing).map(
  ([key, { cert_name, link }]) => (
    <div key={key} className="w-full flex flex-col">
      <a className="ml-3" href={link} target="_blank" rel="noopener noreferrer">
        <li
          className={clsx(
            "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px]  text-lg align-text-top list-disc"
          )}
        >
          {cert_name}
        </li>
      </a>
    </div>
  )
);

const deeplearning_spec = {
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
};

export const deepl_spec_list = Object.entries(deeplearning_spec).map(
  ([key, { cert_name, link }]) => (
    <div key={key} className="w-full flex flex-col">
      <a className="ml-3" href={link} target="_blank" rel="noopener noreferrer">
        <li
          className={clsx(
            "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px]  text-lg align-text-top list-disc"
          )}
        >
          {cert_name}
        </li>
      </a>
    </div>
  )
);

export const google_analytics = {
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
};

export const google_list = Object.entries(google_analytics).map(
  ([key, { cert_name, link }]) => (
    <div key={key} className="w-full flex flex-col">
      <a className="ml-3" href={link} target="_blank" rel="noopener noreferrer">
        <li
          className={clsx(
            "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px]  text-lg align-text-top list-disc"
          )}
        >
          {cert_name}
        </li>
      </a>
    </div>
  )
);

export const others = {
  1: {
    cert_name: "Supervised Machine Learning: Regression and Classification",
    link: "https://coursera.org/share/ba8ef736f1b034ff2c1656325a6e794d",
  },
  2: {
    cert_name: "Data Analysis with Python",
    link: "https://coursera.org/share/ad208dac5e223e9898c3350820f6209d",
  },
  3: {
    cert_name:
      "Intro. to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    link: "https://coursera.org/share/464f23d9b4336c6713e0f289c1647c76",
  },
};

export const others_list = Object.entries(others).map(
  ([key, { cert_name, link }]) => (
    <li
      key={key}
      className={clsx(
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[3px]  text-lg align-text-top list-disc"
      )}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cert_name}
      </a>
    </li>
  )
);
