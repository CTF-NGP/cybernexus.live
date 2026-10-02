export type EventStatus = "Completed" | "Upcoming";

export interface AssocEvent {
  slug: string;
  title: string;
  date: string;
  audience: string;
  status: EventStatus;
  summary: string;
  details: string[];
  links?: { label: string; href: string }[];
  tag: string;
}

export const events: AssocEvent[] = [
  {
    slug: "cyber-heist",
    title: "The Cyber Heist",
    date: "Oct 13, 2025",
    audience: "Internal — CSE (Cyber Security) students",
    status: "Completed",
    summary:
      "The association's first event: an introductory CTF for CSE (CS) students to learn flags, teamwork, and basic security thinking.",
    details: [
      "First official Cybernexus event",
      "Beginner-friendly jeopardy-style challenges",
      "Run for Department of CSE (Cyber Security) students",
    ],
    tag: "Intro CTF",
  },
  {
    slug: "cyber-quest",
    title: "Cyber Quest",
    date: "As part of Kanam 26",
    audience: "External — open CTF participants",
    status: "Completed",
    summary:
      "Cybernexus took its CTF public with Cyber Quest, hosted for external players as part of Kanam 26.",
    details: [
      "Open to external participants",
      "Conducted as part of Kanam 26 tech programme",
      "Listed on CTFtime for the community",
    ],
    links: [{ label: "View on CTFtime", href: "https://ctftime.org/event/3080" }],
    tag: "Open CTF",
  },
  {
    slug: "v3ct0r-ctf",
    title: "V3CT0R CTF 26",
    date: "Oct 10, 2026 — onsite @ NGPiTech",
    audience: "External — teams of 1–4, ₹300 / person",
    status: "Upcoming",
    summary:
      "The flagship. An onsite capture-the-flag at Dr. N.G.P. Institute of Technology across web, crypto, forensics, reverse, pwn, and OSINT — with lunch and refreshments on us.",
    details: [
      "Onsite arena at vector.cybernexus.live",
      "09:00 AM – 4:30 PM IST, Oct 10 2026",
      "Successor to Cyber Heist and Cyber Quest",
    ],
    links: [
      { label: "Event site", href: "https://vector.cybernexus.live" },
      { label: "Register", href: "https://apply.cybernexus.live/" },
    ],
    tag: "Flagship CTF",
  },
];

export const timeline = [
  {
    date: "July 2025",
    title: "Association founded",
    text: "Cybernexus Association starts in the Department of CSE (Cyber Security), Dr. N.G.P. Institute of Technology.",
  },
  {
    date: "Oct 13, 2025",
    title: "The Cyber Heist",
    text: "First event — an introductory CTF for CSE (CS) students.",
  },
  {
    date: "Kanam 26",
    title: "Cyber Quest",
    text: "First external CTF, open to outside participants and listed on CTFtime.",
  },
  {
    date: "Next",
    title: "Leadership handover + V3CT0R",
    text: "A new set of members takes over. V3CT0R CTF and more events are on the way.",
  },
];
