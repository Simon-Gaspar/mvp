import './App.css';
// import axios from 'axios';
// import { useQuery } from 'react-query';
import Navbar from './components/Navbar/Navbar.jsx';
import LeftColumn from './components/LeftColumn/LeftColumn.jsx';
import RightColumn from './components/RightColumn/RightColumn.jsx';
//searchNearby={searchNearby}

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <LeftColumn className="app-left-column" />
        <RightColumn className="app-right-column" />
      </div>
    </div>
  );
}

export default App;
