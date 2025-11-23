import React, { useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import Menu from "../../components/Menu/Menu";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaSync,
  FaTimes,
  FaEnvelope,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaIdBadge,
  FaUserTie,
  FaListUl,
} from "react-icons/fa";

interface Colaborador {
  id_colaborador: number;
  nm_colaborador: string;
  ds_email: string;
  dt_admissao: string;
  salario: number;
  id_cargo: number;
}

interface Cargo {
  id: number;
  nome: string;
}

const CadastroColaborador = () => {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [cargosDisponiveis, setCargosDisponiveis] = useState<Cargo[]>([]);
  const [loading, setLoading] = useState(true);

  const [idEdicao, setIdEdicao] = useState<number | null>(null);
  const [nm_colaborador, setNome] = useState("");
  const [ds_email, setEmail] = useState("");
  const [dt_admissao, setAdmissao] = useState("");
  const [salario, setSalario] = useState("");
  const [id_cargo, setIdCargo] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const [colabsData, cargosData] = await Promise.all([
        apiService.get<Colaborador[]>("/colaboradores"),
        apiService.get<any[]>("/cargos"),
      ]);

      setColaboradores(colabsData);

      const cargosMapeados = cargosData.map((c) => ({
        id: c.id_cargo || c.id,
        nome: c.nm_cargo || c.nome || c.ds_cargo || "Cargo sem nome",
      }));

      setCargosDisponiveis(cargosMapeados);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nm_colaborador || !ds_email || !salario || !id_cargo) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const payload = {
      id_colaborador: idEdicao || null,
      nm_colaborador,
      ds_email,
      dt_admissao,
      salario: Number(salario),
      id_cargo: Number(id_cargo),
    };

    try {
      if (idEdicao) {
        await apiService.put(`/colaboradores/${idEdicao}`, payload);
        alert("Colaborador atualizado com sucesso!");
      } else {
        await apiService.post("/colaboradores", payload);
        alert("Colaborador cadastrado com sucesso!");
      }
      limparForm();
      loadData();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar. Verifique se o ID Cargo existe.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este colaborador?")) return;

    try {
      await apiService.delete(`/colaboradores/${id}`);
      setColaboradores((prev) => prev.filter((c) => c.id_colaborador !== id));
    } catch (error) {
      alert("Erro ao excluir.");
    }
  };

  const handleEdit = (colab: Colaborador) => {
    setIdEdicao(colab.id_colaborador);
    setNome(colab.nm_colaborador);
    setEmail(colab.ds_email);
    setAdmissao(colab.dt_admissao);
    setSalario(colab.salario.toString());
    setIdCargo(colab.id_cargo.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const limparForm = () => {
    setIdEdicao(null);
    setNome("");
    setEmail("");
    setAdmissao("");
    setSalario("");
    setIdCargo("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050510] text-gray-900 dark:text-white flex flex-col transition-colors duration-300">
      <Menu />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold mb-2">
            Cadastro de <span className="text-purple-600">Colaboradores</span>
          </h1>
          <p className="opacity-70">Gestão de Pessoas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl h-fit shadow-lg relative lg:sticky lg:top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              {idEdicao ? (
                <FaSync className="text-yellow-500" />
              ) : (
                <FaUserPlus className="text-purple-500" />
              )}
              {idEdicao ? "Editar Dados" : "Novo Colaborador"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold opacity-70 uppercase mb-1 block">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={nm_colaborador}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                  placeholder="Ex: Ana Costa"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold opacity-70 uppercase mb-1 block">
                  Email Corporativo
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    value={ds_email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                    placeholder="ana.costa@symbio.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold opacity-70 uppercase mb-1 block">
                    Admissão
                  </label>
                  <input
                    type="date"
                    value={dt_admissao}
                    onChange={(e) => setAdmissao(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg px-2 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-sm dark:scheme-dark"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold opacity-70 uppercase mb-1 block">
                    Salário (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={salario}
                    onChange={(e) => setSalario(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg px-2 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold opacity-70 uppercase mb-1 block">
                  ID do Cargo
                </label>
                <div className="relative mb-2">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <FaIdBadge />
                  </span>
                  <input
                    type="number"
                    value={id_cargo}
                    onChange={(e) => setIdCargo(e.target.value)}
                    className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                    placeholder="Ex: 13"
                    required
                  />
                </div>

                <div className="bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg p-3 max-h-40 overflow-y-auto">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-600 mb-2">
                    <FaListUl /> Cargos Disponíveis (ID - Nome)
                  </div>
                  {cargosDisponiveis.length > 0 ? (
                    <ul className="space-y-1">
                      {cargosDisponiveis.map((cargo) => (
                        <li
                          key={cargo.id}
                          className="text-xs flex justify-between text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-white/5 p-1 rounded cursor-pointer"
                          onClick={() => setIdCargo(cargo.id.toString())}
                          title="Clique para selecionar"
                        >
                          <span>{cargo.nome}</span>
                          <span className="font-mono font-bold bg-gray-200 dark:bg-white/10 px-1 rounded">
                            {cargo.id}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-gray-400 italic">
                      Nenhum cargo carregado.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className={`flex-1 font-bold py-3 rounded-lg transition-colors text-white ${
                    idEdicao
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {idEdicao ? "Salvar Alterações" : "Cadastrar"}
                </button>

                {idEdicao && (
                  <button
                    type="button"
                    onClick={limparForm}
                    className="px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    title="Cancelar"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-2 px-2">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaUserTie className="text-purple-500" /> Colaboradores
                Cadastrados
              </h2>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-bold">
                {colaboradores.length}
              </span>
            </div>

            {loading ? (
              <div className="text-center py-20 opacity-50 animate-pulse">
                Sincronizando banco de dados...
              </div>
            ) : colaboradores.length === 0 ? (
              <div className="text-center p-12 border-2 border-dashed border-gray-300 dark:border-white/10 rounded-2xl opacity-60">
                <p className="text-lg mb-2">Nenhum colaborador encontrado.</p>
                <p className="text-sm">
                  Use o formulário para cadastrar sua equipe.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {colaboradores.map((colab) => (
                  <div
                    key={colab.id_colaborador}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-purple-500/50 transition-all shadow-sm group"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                          {colab.nm_colaborador}
                        </h3>
                        <span className="text-[10px] font-mono opacity-40 border border-gray-300 dark:border-white/10 px-1.5 py-0.5 rounded">
                          ID: {colab.id_colaborador}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-2">
                        <FaEnvelope size={12} /> {colab.ds_email}
                      </p>

                      <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
                        <span className="bg-gray-100 dark:bg-white/5 px-2 py-1 rounded flex items-center gap-1">
                          <FaCalendarAlt /> {colab.dt_admissao}
                        </span>
                        <span className="bg-gray-100 dark:bg-white/5 px-2 py-1 rounded flex items-center gap-1">
                          <FaMoneyBillWave /> R$ {colab.salario}
                        </span>

                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-2 py-1 rounded flex items-center gap-1">
                          <FaIdBadge />
                          {cargosDisponiveis.find(
                            (c) => c.id === colab.id_cargo
                          )?.nome || `Cargo ID: ${colab.id_cargo}`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-200 dark:border-white/10">
                      <button
                        onClick={() => handleEdit(colab)}
                        className="p-3 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/10 rounded-full transition-colors"
                        title="Editar"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(colab.id_colaborador)}
                        className="p-3 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                        title="Excluir"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroColaborador;
