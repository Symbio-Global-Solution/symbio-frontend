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
    name: "Seu Nome Aqui",
    rm: "RM12345",
    turma: "2TDSP",
    role: "Tech Lead & Frontend",
    image: "https://github.com/seu-usuario.png",
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
  },
  {
    id: 2,
    name: "Nome do Colega 1",
    rm: "RM67890",
    turma: "2TDSP",
    role: "Backend Java",
    image: "https://github.com/colega1.png", 
    github: "https://github.com/colega1",
    linkedin: "https://linkedin.com/in/colega1",
  },
];