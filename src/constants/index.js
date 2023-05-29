import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  postgres,
  html,
  css,
  flask,
  tensorflow,
  django,
  nodejs,
  mongodb,
  git,
  rust,
  docker,
  ds,
  pd,
  bank,
  fastapi,
  plusteam,
  hitachi,
  tma,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "System Design",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Dev-Ops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Fast API",
    icon: fastapi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Plusteam Global",
    icon: plusteam,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Developed a high-traffic betting website using Django and Celery to handle transactions and manage user data.",
      "Implemented RESTful APIs using Django REST framework and integrated with third-party APIs.",
      "Wrote Celery tasks for asynchronous processing of long-running tasks and scheduled jobs.",
      "Implemented advanced features such as database modification rollback, ensuring that all transactions are reversible in the event of an error.",
      "Implemented a custom caching layer using Redis to reduce database load and improve overall site performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Hitachi Vantara",
    icon: hitachi,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Feb 2023",
    points: [
      "Worked on a team responsible for developing and maintaining a data analytics platform using Python, Kotlin, and PostgreSQL.",
      "Applied ETL processes to extract, transform, and load data from various sources.",
      "Integrated the platform with Google Cloud Pub/Sub to enable real-time data processing and streaming.",
      "Implemented data migration processes between Kotlin and Python to transfer data between systems.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "TMA Solution",
    icon: tma,
    iconBg: "E6DEDD",
    date: "March 2021 - April 2022",
    points: [
      "Utilized Azure Machine Learning for model building, deployment, and operationalization techcommunity.microsoft.com.",
      "Adhered to a cyclical, iterative pattern for IoT Edge model deployment, including data collection, labeling, model training, conversion, and building Leveraged Azure Machine Learning's framework-agnostic approach",
      "Configured deployments using YAML files for specifying model properties, environment settings, and instance types ",
      "Employed Azure ML IoT Docker containers for deploying models on IoT devices, including creating Docker images with pickled models",
      "Implemented multi-IoT device machine learning solutions using distributed data processing platforms like Apache Spark, allowing for efficient parallel processing of large-scale data databricks.com.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Azure ML Auto with LSTM models",
    description:
      "Serving models on Azure Machine Learning",
    tags: [
      {
        name: "Azure ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow LSTM",
        color: "pink-text-gradient",
      },
    ],
    image: ds,
    source_code_link: "https://github.com/xuancuongdoo/pipeline_lstm/blob/main/pipeline_lstm.ipynb",
  },
  {
    name: "Django Ecom",
    description:
      "Django Web application that enables users to buy drone and PS5.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pd,
    source_code_link: "https://github.com/xuancuongdoo/Django",
  },
  {
    name: "Banking MGMT",
    description:
      "Banking systems by Rust and Axum (psql + docker)",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "tokio",
        color: "green-text-gradient",
      },
      {
        name: "axum",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/xuancuongdoo/Banking_mgmt",
  },
];

export { services, technologies, experiences, testimonials, projects };
