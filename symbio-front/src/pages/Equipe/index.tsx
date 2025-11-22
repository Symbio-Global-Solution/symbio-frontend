import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { teamMembers } from '../../data/Team';

const Equipe = () => {
  return (
    <div className="min-h-screen w-full pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-symbio-purple">
            Mentes por trás da SYMBIO
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça o time responsável por revolucionar o reskilling corporativo através da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-symbio-purple/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-symbio-purple rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-full border-2 border-white/20 group-hover:border-symbio-purple transition-colors"
                />
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-1">{member.name}</h2>
                <p className="text-symbio-purple text-sm font-medium mb-4">{member.role}</p>
                
                <div className="inline-block bg-black/20 px-4 py-2 rounded-lg mb-6 text-sm text-gray-300">
                  <p>RM: <span className="text-white font-mono">{member.rm}</span></p>
                  <p>Turma: <span className="text-white font-mono">{member.turma}</span></p>
                </div>

                <div className="flex justify-center gap-4">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-symbio-purple hover:text-white transition-all text-gray-400"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-symbio-purple/10 border border-symbio-purple/30 rounded-xl">
                <div className="p-3 bg-symbio-purple rounded-full text-white">
                    <FaCode />
                </div>
                <div className="text-left">
                    <h3 className="text-white font-bold">Código Fonte do Projeto</h3>
                    <a 
                        href="https://github.com/SEU-REPOSITORIO-AQUI" 
                        target="_blank" 
                        className="text-gray-400 hover:text-white text-sm underline decoration-symbio-purple"
                    >
                        Acessar repositório no GitHub
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};