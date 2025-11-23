import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Menu from './components/Menu/Menu';

import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Faq from './pages/Faq';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-symbio-purple selection:text-white">
          <Menu />
          
          <main className="flex-grow pt-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;