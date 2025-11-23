import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Menu from './components/Menu/Menu';

import Home from './pages/Home';
import Match from './pages/Match';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-symbio-purple selection:text-white">
          <Menu />
          
          <main className="flex-grow pt-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/match" element={<Match/>} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;