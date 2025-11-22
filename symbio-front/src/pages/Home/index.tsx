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

export default Home;
