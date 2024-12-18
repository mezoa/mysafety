import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Users/dashboard/dashboard';
import Events from './Users/Events/events.jsx';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
