import { useEffect, useState, Suspense } from 'react';

import './app.css';
import { TwFolowCard } from './components/Twitter_folowCard/Twitter_folowCard';

function App() {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://danit.pythonanywhere.com/api/v1/programers/')
      .then((res) => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [])

  return (
    <div className='App'> 
      <h1>Fetch de datos</h1>
      <Suspense >
        {loading ? (
          <div className='loading'></div>
        ) : (
          <div className='card'>
            {data.map((user) => (
              <TwFolowCard key={user.id} userName={user.nickname} name={user.fullname} src={user.image} isFolowing={true} ></TwFolowCard>
              
            ))}
          </div>
        )}
      </Suspense>
    </div>
  )
}

export default App;