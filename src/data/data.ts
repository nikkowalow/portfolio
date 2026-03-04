export const cubeImage = {
  src: "/icons/cube.jpg",
  alt: "Cube Exchange",
  width: 70,
  height: 200,
  rounded: true,
};

export const nationImage = {
  src: "/icons/nation-logo.svg",
  alt: "Nation",
  width: 140,
  height: 200,
};

export const solanaImage = {
  src: "/icons/solana.png",
  alt: "Solana",
  width: 280,
  height: 200,
};

export const congressionalAppChallengeImage = {
  src: "/icons/cac.png",
  alt: "Congressional App Challenge",
  width: 280,
  height: 200,
};

export const ohioStateImage = {
  src: "/icons/osu.png",
  alt: "Ohio State University",
  width: 100,
  height: 200,
};

export const workExperience = [
  {
    title: "Cube Exchange",
    role: "Software Engineer Intern",
    location: "Chicago, IL",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Implemented atomic all-or-none order matching in Rust + PostgreSQL, cutting failed multi-asset executions by ~30%.",
      "Built automated portfolio rebalancing and a historical price aggregation service.",
      "Designed RESTful API endpoints and an internal admin dashboard for ops and monitoring.",
    ],
    image: cubeImage,
  },
  {
    title: "NATION",
    role: "Software Engineer Intern",
    location: "Chicago, IL",
    date: "Jun 2023 – Aug 2023",
    bullets: [
      "Mobile front-end with React Native; web app in React + TypeScript; Python backend.",
      "Implemented LSB steganography for secure hidden data transmission within media files.",
      "Built an admin dashboard covering KYC review, bank verification, and push notifications.",
    ],
    image: nationImage,
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
  },
  {
    title: "Order Book Simulator",
    location: "Hackathon",
    date: "June 2020",
    award: "1st place · Illinois",
    image: congressionalAppChallengeImage,
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
    image: congressionalAppChallengeImage,
    bullets: [
      "Built a skin cancer pre-diagnosis suite in Python, React, and SQL.",
      "Trained an ML model to classify benign vs. malignant lesions at 83% accuracy.",
      "Awarded by Rep. Brad Schneider.",
    ],
  },
];

export const education = [
  {
    school: "Ohio State University",
    degree: "B.S. Computer Science & Engineering",
    spec: "Specialization in Networking",
    location: "Columbus, OH",
    date: "Aug 2021 – May 2025",
    image: ohioStateImage,
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

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Rust", "SQL", "C/C++", "Go"],
  },
  {
    category: "Frameworks",
    items: ["React", "React Native", "Next.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Tools & Infra",
    items: ["PostgreSQL", "Git", "Docker", "Linux", "REST APIs"],
  },
  {
    category: "Blockchain",
    items: ["Solana", "Rust smart contracts", "Web3"],
  },
];
