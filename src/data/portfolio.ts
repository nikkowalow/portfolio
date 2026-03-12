export const cubeImage = {
  src: "/formia/cube.png",
  altSrc: "/logos/cube.jpg",
  //   src: "/icons/cube.jpg",
  alt: "Cube Exchange",
  width: 250,
  height: 250,
  rounded: true,
  fill: true,
};

export const nationImage = {
  src: "/formia/nation.png",
  altSrc: "/logos/nation.png",
  alt: "Nation",
  width: 140,
  height: 200,
  fill: false,
  invert: false,
};

export const solanaImage = {
  src: "/formia/solana.png",
  altSrc: "/logos/solana.webp",
  alt: "Solana",
  width: 280,
  height: 50,
  fill: true,
};

export const osmiumImage = {
  src: "/formia/osmium.png",
  altSrc: "/logos/osmium.png",
  alt: "Osmium",
  width: 280,
  height: 200,
};

export const orderbookImage = {
  src: "/formia/orderbook.png",
  altSrc: "/logos/orderbook.png",
  alt: "Order Book Simulator",
  width: 280,
  height: 200,
};

export const congressionalAppChallengeImage = {
  src: "/formia/cac.png",
  altSrc: "/logos/cac.png",
  alt: "Congressional App Challenge",
  width: 280,
  height: 200,
};

export const orderBookImage = {
  src: "/formia/orderbook.png",
  altSrc: "/logos/orderbook.png",
  alt: "Order Book Simulator",
  width: 280,
  height: 200,
  fill: true,
};

export const ohioStateImage = {
  src: "/formia/osu.png",
  altSrc: "/logos/osu.png",
  //   src: "/icons/osu.tiff",
  alt: "Ohio State University",
  width: 100,
  height: 200,
};

export const lfhsImage = {
  src: "/icons/lfhs.png",
  alt: "LFHS",
  width: 100,
  height: 200,
};

export const workExperience = [
  {
    title: "Cube Exchange",
    role: "Backend Software Engineer",
    location: "Chicago, IL",
    date: "May 2024 - Aug 2024",
    bullets: [
      "Implemented atomic all-or-none order matching in Rust + PostgreSQL, cutting failed multi-asset executions by ~30%.",
      "Built automated portfolio rebalancing and a historical price aggregation service.",
      "Designed RESTful API endpoints and an internal admin dashboard for ops and monitoring.",
    ],
    description:
      "During my internship at Cube Exchange, I worked on backend infrastructure for a high-performance crypto trading platform, primarily contributing to the development of a multi-asset “bundles” trading feature. Bundles function similarly to ETFs, allowing users to execute a single order that simultaneously buys or sells multiple cryptocurrencies (such as BTC, ETH, and SOL) according to predefined allocation weights. I implemented atomic all-or-none execution logic to ensure bundle integrity, meaning that if any individual asset leg could not be executed due to liquidity or market constraints, the entire bundle order would fail rather than partially fill and leave the portfolio in an unintended state. In addition to the execution logic, I built historical bundle price feeds that aggregate market data across multiple underlying assets and time intervals to compute the true composite price of a bundle, enabling accurate performance tracking, visualization, and analytics. This required combining price data across assets and storing aggregated results for efficient querying. The system was implemented primarily in Rust with PostgreSQL for persistence, with supporting work across TypeScript/React components and scripting tools for data processing and analysis. Improvements to bundle validation and execution logic reduced failed bundle orders on low-liquidity markets by approximately 18%, improving reliability and user experience for multi-asset trading.",
    image: cubeImage,
    backgroundColor: "rgb(253,212,57)",
    techStack: [
      { name: "Rust", image: "/tech_logos/rust.png" },
      { name: "PostgreSQL", image: "/tech_logos/psql.png" },
      { name: "React", image: "/tech_logos/react.png" },
      { name: "TypeScript", image: "/tech_logos/ts.svg" },
      { name: "Docker", image: "/tech_logos/docker.png" },
      { name: "AWS", image: "/tech_logos/aws.png" },
    ],
    url: "https://cube.exchange/",
  },
  {
    title: "NATION",
    role: "Full-Stack Software Engineer",
    location: "Chicago, IL",
    date: "Jun 2023 - Aug 2023",
    description:
      "During my internship at Nation, I worked as a full-stack software engineer contributing to both web and mobile products across the company’s platform and its film-investment subsidiary, Flare. I developed features for the Nation.io web application, including implementing a user comments system and additional UI improvements using React and TypeScript. I also helped build a mobile application using React Native that enables venture capital investors to fund film projects through the Flare platform. The app allows filmmakers to submit funding requests for their movie projects and enables investors to browse opportunities and allocate capital, receiving a share of profits if the film performs successfully. On the backend, I worked with Supabase to manage application data and authentication while integrating APIs that support project submissions, investment flows, and user management. In addition, I built an internal admin dashboard used by the team to review and approve funding requests, manage investor activity, and configure operational features such as push notifications and access control. This work involved designing UI components, connecting frontend flows to backend services, and ensuring that both investor-facing and internal tools operated smoothly across web and mobile environments.",
    bullets: [
      "Mobile front-end with React Native; web app in React + TypeScript; Python backend.",
      "Implemented LSB steganography for secure hidden data transmission within media files.",
      "Built an admin dashboard covering KYC review, bank verification, and push notifications.",
    ],
    image: nationImage,
    backgroundColor: "#fff",
    techStack: [
      { name: "React Native", image: "/tech_logos/react.png" },
      { name: "TypeScript", image: "/tech_logos/ts.svg" },
      { name: "PostgreSQL", image: "/tech_logos/psql.png" },
      { name: "Supabase", image: "/tech_logos/supabase.png" },
      { name: "Figma", image: "/tech_logos/figma.svg" },
      { name: "Expo", image: "/tech_logos/expo.png" },
    ],
    images: [],
    url: "https://www.nation.io/",
  },
];

export const projects = [
  {
    title: "Order Book Simulator",
    location: "Personal Project",
    date: "2023",
    image: orderBookImage,
    bullets: [
      "Built a limit order book simulator in Rust with price-time priority matching.",
      "Supports market, limit, and cancel orders with real-time depth-of-book tracking.",
    ],
    techStack: [
      { name: "C++", image: "/tech_logos/cpp.png" },
      { name: "AWS", image: "/tech_logos/aws.png" },
      { name: "React", image: "/tech_logos/react.png" },
    ],
    images: ["screenshots/2.png", "screenshots/1.png"],
    url: "https://bloomcore.app",
    githubUrl: "https://github.com/nikkowalow/order-book-simulator",
    description:
      "Built a full-stack simulation of a modern electronic exchange, implementing a price–time priority limit order book and matching engine in C++ with deterministic matching, partial fills, and multi-level order sweeps. The system exposes an HTTP REST API for order entry and market data queries, a real-time WebSocket feed for streaming trades and book state, and a React UI for visualizing order flow and market depth. Internally, the engine uses PMR pool allocators for low-latency order storage, append-only JSONL journaling for trades and order lifecycle events, and a modular fan-out architecture to decouple matching logic from downstream consumers. Additional components include automated market-making and trading bot strategies, per-user position tracking with balance validation, and benchmarking tools that measure p50/p90/p99 order processing latency under different market scenarios.",
  },
  {
    title: "Osmium - Financial Tracker",
    location: "Hackathon",
    date: "2022",
    image: osmiumImage,
    description:
      "I developed a real-time net worth aggregation platform as a mobile application built with React Native and TypeScript, backed by a PostgreSQL database and hosted backend services on Render. The platform consolidates a user’s financial data across multiple sources—including bank accounts, brokerage accounts, cryptocurrency exchanges, and alternative assets such as real estate—to compute a unified and continuously updated view of total net worth. I integrated Plaid to securely connect traditional banking and brokerage accounts, while implementing additional OAuth 2.0 connectors for cryptocurrency platforms such as Coinbase to retrieve wallet balances and transaction data. The system aggregates asset values using external market price feeds and normalizes them into a single portfolio model that updates in real time. To support historical performance analysis, I designed a time-series data pipeline using TimescaleDB to store periodic net worth snapshots and enable efficient queries for historical trends and asset-category breakdowns. On the frontend, I used Zustand for lightweight global state management to ensure fast updates across the application when account balances or market prices change. The result is a responsive financial dashboard that provides users with a comprehensive, real-time view of their financial position across disparate financial platforms.",
    bullets: [
      "Built a personal finance tracker with automated categorization and spending insights.",
      "Integrated with bank APIs via Plaid for real-time transaction sync.",
    ],
    backgroundColor: "#000",
    techStack: [
      { name: "TypeScript", image: "/tech_logos/ts.svg" },
      { name: "PostgreSQL", image: "/tech_logos/psql.png" },
      { name: "React Native", image: "/tech_logos/react.png" },
      { name: "Timescale DB", image: "/tech_logos/timescale.png" },
      { name: "Expo", image: "/tech_logos/expo.png" },
      { name: "Render", image: "/tech_logos/render.png" },
    ],
    images: [],
  },
  {
    title: "Solana Season Hackathon",
    location: "Hackathon",
    date: "June 2021",
    award: 3,
    image: solanaImage,
    description:
      "I built Bubl, a decentralized event ticketing platform created during the Solana Season Hackathon, where the project placed 3rd in the NFT Track and was awarded $5,000. The platform was designed to reduce ticketing fees, prevent fraudulent resale, and address issues such as counterfeit tickets and scalping in secondary markets. Using Solana smart contracts written in Rust, each ticket is minted as an NFT and stored entirely on-chain, enabling verifiable ownership and a transparent transfer history for every ticket. This architecture allows secure peer-to-peer resale while giving event organizers more control over distribution and pricing without relying on centralized ticketing intermediaries. I built the frontend using React and TypeScript to provide a wallet-connected interface where users can purchase, transfer, and manage their tickets directly through the Solana network. By leveraging Solana’s high-throughput, low-fee infrastructure, the platform enables fast transactions and significantly lower costs compared to traditional ticketing systems, while maintaining a fully decentralized model for ticket issuance, ownership, and resale.",
    bullets: [
      "Built a decentralized ticketing platform on Solana using Rust, React, and smart contracts.",
      "Eliminated fraudulent tickets and secondary market inflation via blockchain verification.",
    ],
    backgroundColor: "#fff",
    techStack: [
      { name: "Solana Smart Contracts", image: "/tech_logos/solana.png" },
      { name: "Rust", image: "/tech_logos/rust.png" },
      { name: "React", image: "/tech_logos/react.png" },
    ],
    images: [],
    url: "https://solana.com/news/announcing-winners-of-the-solana-season-hackathon",
  },
  {
    title: "Congressional App Challenge",
    location: "Hackathon",
    date: "2020",
    award: 1,
    image: congressionalAppChallengeImage,
    description:
      "I developed SkinID, an AI-powered skin cancer pre-diagnosis application created for the Congressional App Challenge, where the project was awarded 1st place in Illinois’ 10th Congressional District by Congressman Brad Schneider. Working alongside a teammate, we built a system that allows users to photograph skin lesions using a mobile application and receive an early risk assessment for potential skin cancer. The mobile app was developed in Swift with a camera-based scanning feature, while the backend was implemented in Python using FastAPI with a SQL database to manage user data and image analysis results. The core of the system leveraged a machine learning model trained on the HAM10000 dermatology dataset, which contains labeled images of benign and malignant skin lesions. By applying computer vision techniques and supervised learning on this dataset, the model was able to classify potential skin conditions with an accuracy of approximately 83%. A Vue-based web interface was also developed to support administrative review and data visualization. The project was designed as an accessible early screening tool to help users identify potentially dangerous skin abnormalities and encourage earlier medical consultation.",
    bullets: [
      "Built a skin cancer pre-diagnosis suite awarded 1st place in Illinois.",
      "Trained an ML model to classify benign vs. malignant lesions at 83% accuracy.",
      "Awarded by Rep. Brad Schneider.",
    ],
    backgroundColor: "#fc2003",
    techStack: [
      { name: "Python", image: "/tech_logos/python.png" },
      { name: "Tensorflow", image: "/tech_logos/tensorflow.png" },
      { name: "React", image: "/tech_logos/react.png" },
      { name: "SQL", image: "/tech_logos/psql.png" },
    ],
    images: [],
    url: "https://www.congressionalappchallenge.us/20-il10/",
  },
];

export const education = [
  {
    school: "Ohio State University",
    degree: "B.S. Computer Science",
    spec: "Specialization in Networking",
    location: "Columbus, OH",
    date: "Aug 2021 - May 2025",
    image: ohioStateImage,
    backgroundColor: "rgb(191,12,25)",
    activities: ["Pi Lambda Phi", "HackOHI/O"],
    coursework: [
      {
        name: "Cryptography",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_5351",
      },
      {
        name: "Network Security",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_5473",
      },
      {
        name: "AI",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_3521",
      },
      {
        name: "Operating Systems",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_2431",
      },
      {
        name: "Data Structures",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_2331",
      },
      {
        name: "Linear Algebra",
        url: "https://math.osu.edu/courses/math-2568",
      },
      {
        name: "Software Engineering",
        url: "https://syllabi.engineering.osu.edu/syllabi/cse_2231",
      },
    ],
  },
];

export const profile = [
  {
    name: "Nikko Kowalow",
    title: "Software Engineer",
    location: "Chicago, IL",
    image: { src: "/icons/pfp.jpg", alt: "Nikko Kowalow", rounded: true },
  },
];

const formia = false;

const logoPath = formia ? "/tech_logos/formia/" : "/tech_logos/";

export const skills: {
  category: string;
  items: { name: string; image?: string }[];
}[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", image: `${logoPath}python.png` },
      { name: "TypeScript", image: `${logoPath}ts.svg` },
      { name: "Rust", image: `${logoPath}rust.png` },
      { name: "SQL", image: `${logoPath}psql.png` },
      { name: "C/C++", image: `${logoPath}cpp.png` },
      { name: "Java", image: `${logoPath}java.png` },
      { name: "JavaScript", image: `${logoPath}js.png` },
      { name: "Go", image: `${logoPath}go.png` },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", image: `${logoPath}react.png` },
      { name: "Next.js", image: `${logoPath}nextjs.png` },
      { name: "Tailwind CSS", image: `${logoPath}tailwindcss.svg` },
      { name: "Git", image: `${logoPath}git.png` },
      { name: "Docker", image: `${logoPath}docker.png` },
      { name: "Linux", image: `${logoPath}linux.png` },
      { name: "AWS", image: `${logoPath}aws.png` },
      { name: "TimescaleDB", image: `${logoPath}timescale.png` },
      { name: "Figma", image: `${logoPath}figma.svg` },
      { name: "OAuth 2.0", image: `${logoPath}oauth.png` },
      { name: "Expo", image: `${logoPath}expo.png` },
      { name: "Bash", image: `${logoPath}bash.png` },
      { name: "Render", image: `${logoPath}render.png` },
      { name: "Supabase", image: `${logoPath}supabase.png` },
      { name: "Tensorflow", image: `${logoPath}tensorflow.png` },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solana", image: `${logoPath}solana.png` },
      { name: "Rust smart contracts", image: `${logoPath}rust.png` },
      { name: "Web3" },
    ],
  },
];

export const links: {}[] = [
  {
    name: "GitHub",
    url: "https://github.com/nikkowalow",
    image: { src: "/formia/github.png", alt: "GitHub", width: 20, height: 20 },
    backgroundColor: "rgb(8,191,80)",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nikkokowalow/",
    image: {
      src: "/formia/linkedin.png",
      alt: "LinkedIn",
      width: 20,
      height: 20,
    },
    backgroundColor: "rgb(43, 132, 224)",
  },
  {
    name: "Email",
    url: "mailto:nikkopkowalow@gmail.com",
    image: { src: "/formia/email.png", alt: "Email", width: 20, height: 20 },
    backgroundColor: "rgb(252, 169, 25)",
  },
  {
    name: "X",
    url: "https://x.com/yieldmaxxer",
    image: {
      src: "/formia/x.png",
      alt: "X",
      width: 20,
      height: 20,
      hoverSrc: "/icons/x-white.png",
    },
    backgroundColor: "#fff",
  },
];
