import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/getTest')
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="App">
      <div>{data && data}</div>
      <div>{loading && 'Loading...'}</div>
    </div>
  );
}

export default App;
