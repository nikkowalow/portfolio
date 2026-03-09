export const cubeImage = {
  src: "/formia/cube.png",
  //   src: "/icons/cube.jpg",
  alt: "Cube Exchange",
  width: 250,
  height: 250,
  //   rounded: true,
  fill: true,
};

export const nationImage = {
  //   src: "/icons/nation-logo.svg",
  src: "/formia/nation.png",
  alt: "Nation",
  width: 140,
  height: 200,
  fill: false,
  invert: false,
};

export const solanaImage = {
  src: "/formia/solana.png",
  //   src: "/icons/solana-logo.jpg",
  alt: "Solana",
  width: 280,
  height: 50,
  fill: true,
};

export const osmiumImage = {
  src: "/formia/osmium.png",
  alt: "Osmium",
  width: 280,
  height: 200,
};

export const congressionalAppChallengeImage = {
  src: "/formia/cac.png",
  alt: "Congressional App Challenge",
  width: 280,
  height: 200,
};

export const orderBookImage = {
  src: "/formia/orderbook.png",
  alt: "Order Book Simulator",
  width: 280,
  height: 200,
  fill: true,
};

export const ohioStateImage = {
  src: "/formia/osu.png",
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
  },
];

export const projects = [
  {
    title: "Solana Season Hackathon",
    location: "Hackathon",
    date: "June 2021",
    award: "3rd place · $5,000",
    image: solanaImage,
    bullets: [
      "Built a decentralized ticketing platform on Solana using Rust, React, and smart contracts.",
      "Eliminated fraudulent tickets and secondary market inflation via blockchain verification.",
    ],
    backgroundColor: "#fff",
  },
  {
    title: "Congressional App Challenge",
    location: "Hackathon",
    date: "June 2020",
    award: "1st place · Illinois",
    image: congressionalAppChallengeImage,
    bullets: [
      "Built a skin cancer pre-diagnosis suite in Python, React, and SQL.",
      "Trained an ML model to classify benign vs. malignant lesions at 83% accuracy.",
      "Awarded by Rep. Brad Schneider.",
    ],
    backgroundColor: "#fc2003",
  },
  {
    title: "Order Book Simulator",
    location: "Hackathon",
    date: "June 2020",
    award: "1st place · Illinois",
    image: orderBookImage,
    bullets: [
      "Built a skin cancer pre-diagnosis suite in Python, React, and SQL.",
      "Trained an ML model to classify benign vs. malignant lesions at 83% accuracy.",
      "Awarded by Rep. Brad Schneider.",
    ],
  },
  {
    title: "Osmium - Financial Tracker",
    location: "Hackathon",
    date: "June 2020",
    award: "1st place · Illinois",
    image: osmiumImage,
    bullets: [
      "Built a skin cancer pre-diagnosis suite in Python, React, and SQL.",
      "Trained an ML model to classify benign vs. malignant lesions at 83% accuracy.",
      "Awarded by Rep. Brad Schneider.",
    ],
    backgroundColor: "#000",
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
    degree: "B.S. Computer Science & Engineering",
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

export const skills: {
  category: string;
  items: { name: string; image?: string }[];
}[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", image: "/tech_logos/python.png" },
      { name: "TypeScript", image: "/tech_logos/ts.svg" },
      { name: "Rust", image: "/tech_logos/rust.png" },
      { name: "SQL", image: "/tech_logos/psql.png" },
      { name: "C/C++", image: "/tech_logos/cpp.png" },
      { name: "Java", image: "/tech_logos/java.png" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", image: "/tech_logos/react.png" },
      { name: "Next.js", image: "/tech_logos/nextjs.png" },
      { name: "Tailwind CSS", image: "/tech_logos/tailwindcss.svg" },
      { name: "Git", image: "/tech_logos/git.png" },
      { name: "Docker", image: "/tech_logos/docker.png" },
      { name: "Linux", image: "/tech_logos/linux.png" },
      { name: "AWS", image: "/tech_logos/aws.png" },
      { name: "TimescaleDB", image: "/tech_logos/timescale.png" },
      { name: "Figma", image: "/tech_logos/figma.svg" },
      { name: "OAuth 2.0", image: "/tech_logos/oauth.png" },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solana", image: "/tech_logos/solana.png" },
      { name: "Rust smart contracts", image: "/tech_logos/rust.png" },
      { name: "Web3" },
    ],
  },
];

export const links: {}[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    image: { src: "/formia/github.png", alt: "GitHub", width: 20, height: 20 },
    backgroundColor: "rgb(8,191,80)",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
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
    url: "mailto:nikkokowalow@gmail.com",
    image: { src: "/formia/email.png", alt: "Email", width: 20, height: 20 },
    backgroundColor: "rgb(252, 169, 25)",
  },
  {
    name: "X",
    url: "https://x.com",
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
