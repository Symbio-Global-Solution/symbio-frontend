export interface TeamMember {
  id: number;
  name: string;
  rm: string;
  turma: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Henrique Teixeira Cesar",
    rm: "RM563088",
    turma: "1TDSPF",
    role: "Frontend React",
    image: "https://github.com/HenriqueTCesar.png", 
    github: "https://github.com/HenriqueTCesar",
    linkedin: "https://www.linkedin.com/in/henriquecesarr",
  },
  {
    id: 2,
    name: "Henrique Martins Oliveira",
    rm: "RM563620",
    turma: "1TDSPF",
    role: "Backend Java",
    image: "https://github.com/hrqmartins.png", 
    github: "https://github.com/hrqmartins",
    linkedin: "https://www.linkedin.com/in/hrqmartins",
  },
];