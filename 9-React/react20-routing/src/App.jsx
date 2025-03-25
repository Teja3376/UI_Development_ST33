import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr/>

        {/* Wrap Routes properly */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
