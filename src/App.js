import './App.css';
// import axios from 'axios';
// import { useQuery } from 'react-query';
import Navbar from './components/Navbar/Navbar.jsx';
import FilterBar from './components/FilterBar/FilterBar.jsx';
import RestaurantList from './components/RestaurantList/RestaurantList.jsx';
//searchNearby={searchNearby}

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <FilterBar className="app-left-column" />
        <RestaurantList className="app-right-column" />
      </div>
    </div>
  );
}

export default App;
