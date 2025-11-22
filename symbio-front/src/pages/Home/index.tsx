import { useState } from 'react';
import { useEffect } from 'react';
import { apiService } from '../../services/apiService';

useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      const [colabRes, vagasRes, cargosRes] = await Promise.all([
        apiService.get<any[]>('/colaboradores'),
        apiService.get<any[]>('/vagas'),
        apiService.get<any[]>('/cargos')
      ]);

      setStats({
        colaboradores: colabRes.length,
        vagas: vagasRes.length,
        cargos: cargosRes.length
      });
    } catch (error) {
      console.error("Erro ao carregar dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchDashboardData();
}, []);

interface DashboardData {
  colaboradores: number;
  vagas: number;
  cargos: number;
}

const Home = () => {
  const [stats, setStats] = useState<DashboardData>({
    colaboradores: 0,
    vagas: 0,
    cargos: 0
  });

  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto pt-10 pb-20 px-6">
        Home Page
      </div>
    </div>
  );
};
<div className="text-center mb-20 mt-10">
  <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
    Não espere o futuro. <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B265D9]">
      A Evolução do Trabalho é agora.
    </span>
  </h1>

  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
    A plataforma da SYMBIO utiliza IA para analisar o perfil dos seus colaboradores e encontrar o match perfeito para vagas internas.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Link 
      to="/match"
      className="bg-[#764A95] hover:bg-[#5e3b7a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2"
    >
      Iniciar Análise de Match
    </Link>

    <Link 
      to="/sobre"
      className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium"
    >
      Saiba como funciona
    </Link>
  </div>
</div>

export default Home;
