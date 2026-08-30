export const site = {
  name: "Swapna Sahoo",
  handle: "swapnasahoo",
  url: "https://swapnasahoo.site",
  email: "sahooswapnaswarup@gmail.com",
  github: "https://github.com/swapnasahoo",
  location: "India",
} as const;

export const hero = {
  title: "Swapna Sahoo",
  blurb:
    "I build real-world apps with React Native, Expo and Appwrite, and ship web work in Next.js when the job calls for it.",
} as const;

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  github: string;
  live?: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: "CricTalk",
    blurb:
      "A cricket discussion platform for iOS and Android. Auth, threads, and real-time data backed by Appwrite.",
    stack: ["React Native", "Expo", "NativeWind", "Appwrite", "TypeScript"],
    github: "https://github.com/swapnasahoo/cric-talk",
    year: "2026",
  },
  {
    name: "Mint Paisa",
    blurb:
      "Personal finance app for tracking income, expenses and budgets. Cross-platform, with charts and auth.",
    stack: ["React Native", "Expo", "NativeWind", "Appwrite", "TypeScript"],
    github: "https://github.com/swapnasahoo/mint-paisa",
    year: "2026",
  },
  {
    name: "Cosmos",
    blurb:
      "An interactive cosmology education site: timeline, physics sandbox, CMB explorer, blog and admin.",
    stack: ["Next.js 16", "React 19", "Tailwind", "Supabase", "Canvas API"],
    github: "https://github.com/swapnasahoo/cosmos",
    live: "https://cosmos-sepia-two.vercel.app",
    year: "2026",
  },
  {
    name: "Expense Tracker",
    blurb:
      "A web-based expense tracker with transactions, loans and simple charts. Plain JavaScript, no framework.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/swapnasahoo/expense-tracker",
    live: "https://expense-tracker-rust-beta.vercel.app",
    year: "2025",
  },
  {
    name: "Bills",
    blurb:
      "A small Expo app for creating, editing and sharing bills between people.",
    stack: ["React Native", "Expo", "NativeWind", "TypeScript"],
    github: "https://github.com/swapnasahoo/bills-app",
    year: "2025",
  },
];

export const contributions = [
  {
    project: "javascript.info",
    description:
      'Merged a small docs fix in the Modern JavaScript Tutorial (en): terminology cleanup replacing "figure brackets" with "curly braces" in two chapters.',
    url: "https://github.com/javascript-tutorial/en.javascript.info/pull/3936",
  },
];

export const about =
  `I write software that actually runs on a phone, on a server, or in a browser. Most of my time goes into mobile apps built with React Native and Expo, backed by Appwrite for auth, data and storage. I also work on the web with Next.js, TypeScript and Supabase when the problem is better solved there. I care about clean UI, real auth flows, and code that does not fall apart when a user touches it.` as const;
