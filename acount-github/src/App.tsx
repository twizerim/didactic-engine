import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Firstpage from './pages/firstdarkpage';

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Firstpage/>} />
    </Routes>
  </Router>
  );
}

export default App;
