import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContexts";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileOpen(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Equipe", path: "/equipe" },
    { name: "Sobre", path: "/sobre" },
    { name: "FAQ", path: "/faq" },
    { name: "Cadastro", path: "/cadastro" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/70 dark:bg-black/40 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 relative">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMenu}>
            <span className="font-display font-bold text-xl text-gray-800 dark:text-white tracking-tight">
              SYMBIO
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                isActive(link.path)
                  ? "text-purple-600 dark:text-purple-400 font-bold"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-purple-600 dark:text-yellow-400"
            aria-label="Alternar Tema"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/match"
            className="hidden sm:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all hover:scale-105"
          >
            Match IA
          </Link>

          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full mt-3 p-4 rounded-3xl bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in-up">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`px-4 py-3 rounded-xl transition-all ${
                isActive(link.path)
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-200 dark:bg-white/10 my-1"></div>
          <Link
            to="/match"
            onClick={closeMenu}
            className="text-center bg-purple-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg"
          >
            Acessar Match IA
          </Link>
        </div>
      )}
    </header>
  );
};

export default Menu;