import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data, isFetching } = useQuery('getTest', () =>
    axios.get('/api/getTest').then((res) => res.data)
  );
  return (
    <div className="App">
      <div>{data && data}</div>
      <div>{isLoading && 'Loading...'}~</div>
    </div>
  );
}

export default App;
