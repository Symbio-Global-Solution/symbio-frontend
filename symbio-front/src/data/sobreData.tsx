import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaSearch } from 'react-icons/fa';

// Dados dos Pilares 
export const values = [
  {
    icon: <FaLightbulb />,
    title: "Inovação Consciente",
    desc: "Utilizamos IA não para substituir, mas para potencializar a capacidade humana."
  },
  {
    icon: <FaUsers />,
    title: "Foco no Humano",
    desc: "A tecnologia é o meio. O desenvolvimento das pessoas é o nosso fim."
  },
  {
    icon: <FaChartLine />,
    title: "Evolução Contínua",
    desc: "O mercado muda rápido. Garantimos que sua equipe mude na mesma velocidade."
  }
];

// Dados da Timeline 
export const steps = [
  {
    id: 1,
    title: "Análise de Perfil",
    desc: "Nossa IA analisa as habilidades técnicas (hard skills) e comportamentais (soft skills) dos seus colaboradores atuais.",
    icon: <FaSearch />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Identificação de Gaps",
    desc: "Cruzamos os dados do colaborador com as tendências de mercado para identificar lacunas de competência.",
    icon: <FaLightbulb />,
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Requalificação (Reskilling)",
    desc: "Sugerimos trilhas de aprendizado personalizadas para preencher os gaps identificados.",
    icon: <FaChartLine />,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Realocação Interna",
    desc: "Conectamos o colaborador ideal à vaga certa dentro da sua empresa, reduzindo turnover.",
    icon: <FaRocket />,
    color: "bg-pink-500"
  }
];