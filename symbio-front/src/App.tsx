import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Menu from './components/Menu/Menu';

import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-symbio-purple selection:text-white">
          <Menu />
          
          <main className="flex-grow pt-28 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;