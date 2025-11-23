import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { teamMembers } from "../../data/Team";
import Menu from "../../components/Menu/Menu";

const Equipe = () => {
  return (
    <div className="min-h-screen bg-page text-page font-sans relative overflow-x-hidden flex flex-col transition-colors duration-300">
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none hidden dark:block" />

      <Menu />

      <div className="w-full pt-32 pb-20 px-6 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Mentes por trás da{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                SYMBIO
              </span>
            </h1>
            <p className="opacity-80 max-w-2xl mx-auto">
              Conheça o time responsável por revolucionar o reskilling
              corporativo através da tecnologia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card border border-themeBorder backdrop-blur-md rounded-2xl p-6 shadow-lg dark:shadow-none hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-0 dark:opacity-20 group-hover:opacity-50 transition-opacity"></div>

                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-2 border-themeBorder group-hover:border-purple-500 transition-colors"
                    />
                  ) : (
                    <div className="relative w-full h-full rounded-full border-2 border-themeBorder group-hover:border-purple-500 bg-page flex items-center justify-center text-3xl opacity-50">
                      👤
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                  <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                    {member.role}
                  </p>

                  <div className="inline-block bg-page border border-themeBorder px-4 py-2 rounded-lg mb-6 text-sm opacity-90">
                    <p>
                      RM:{" "}
                      <span className="font-mono font-bold">{member.rm}</span>
                    </p>
                    <p>
                      Turma:{" "}
                      <span className="font-mono font-bold">
                        {member.turma}
                      </span>
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-page border border-themeBorder rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all opacity-70 hover:opacity-100"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-page border border-themeBorder rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all opacity-70 hover:opacity-100"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-card border border-themeBorder rounded-xl hover:shadow-lg transition duration-300">
              <div className="p-3 bg-purple-600 rounded-full text-white shadow-lg shadow-purple-500/20">
                <FaCode />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Código Fonte do Projeto</h3>
                <a
                  href="https://github.com/Symbio-Global-Solution/symbio-frontend"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 hover:text-purple-500 text-sm underline decoration-purple-500 transition-all"
                >
                  Acessar repositório no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
