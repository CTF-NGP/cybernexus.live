export type TeamRole =
  | "President"
  | "Vice President"
  | "Secretary"
  | "Joint Secretary"
  | "Treasurer"
  | "Executive Member";

export interface TeamMember {
  name: string;
  role: TeamRole;
  batch: string;
}

export const foundingCommittee: TeamMember[] = [
  { name: "Pavithra R J", role: "President", batch: "2023 – 2027" },
  { name: "Adithya G", role: "Vice President", batch: "2024 – 2028" },
  { name: "Jishnu", role: "Secretary", batch: "2023 – 2027" },
  { name: "Saran K", role: "Joint Secretary", batch: "2024 – 2028" },
  { name: "Sowmitha P", role: "Treasurer", batch: "2023 – 2027" },
  { name: "Dharshini S", role: "Executive Member", batch: "2024 – 2028" },
  { name: "Sangamithra P", role: "Executive Member", batch: "2024 – 2028" },
  { name: "Rithika K", role: "Executive Member", batch: "2023 – 2027" },
  { name: "Sharu Praba K", role: "Executive Member", batch: "2023 – 2027" },
];

export const roleOrder: TeamRole[] = [
  "President",
  "Vice President",
  "Secretary",
  "Joint Secretary",
  "Treasurer",
  "Executive Member",
];
