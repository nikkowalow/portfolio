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
    role: "Software Engineer Intern",
    location: "Chicago, IL",
    date: "May 2024 - Aug 2024",
    bullets: [
      "Implemented atomic all-or-none order matching in Rust + PostgreSQL, cutting failed multi-asset executions by ~30%.",
      "Built automated portfolio rebalancing and a historical price aggregation service.",
      "Designed RESTful API endpoints and an internal admin dashboard for ops and monitoring.",
    ],
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
    images: ["/logos/cac.png", "/logos/osmium.png"],
    url: "https://cube.exchange/",
  },
  {
    title: "NATION",
    role: "Software Engineer Intern",
    location: "Chicago, IL",
    date: "Jun 2023 - Aug 2023",
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
  },
  {
    title: "Osmium - Financial Tracker",
    location: "Hackathon",
    date: "2022",
    image: osmiumImage,
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
  //   {
  //     school: "Lake Forest High School",
  //     location: "Lake Forest, IL",
  //     date: "Aug 2017 – May 2021",
  //     image: lfhsImage,
  //     backgroundColor: "rgb(41,68,151)",
  //   },
  {
    school: "Ohio State University",
    degree: "B.S. Computer Science",
    spec: "Specialization in Networking",
    location: "Columbus, OH",
    date: "Aug 2021 - May 2025",
    image: ohioStateImage,
    backgroundColor: "rgb(191,12,25)",
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
