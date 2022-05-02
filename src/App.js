import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('getPlace', () =>
    axios.get('/api/getPlace').then((res) => res.data)
  );
  return (
    <div className="App">
      <div>{data && data}</div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{error && error}</div>
    </div>
  );
}

export default App;
