import { useEffect, useState, Suspense } from 'react';
import './App.css';
// import { FetchData } from './fetchData';



// const apiData = FetchData('https://danit.pythonanywhere.com/api/v1/programers/');

function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('https://danit.pythonanywhere.com/api/v1/programers/')
      .then((res) =>  res.json().then(data => setData(data)));
  }, [])
  return (//utiliza tailwindcss


    <div className='App'> 
      <h1>Fetch de datos</h1>
        
      <Suspense fallback={<div>Loading...</div>} >
        <ul className='card'>
          {data?.map((user) => (
              
            <li key={user.id}>{user.fullname} edad {user.age} años</li>
              
          ))}
        </ul>
      </Suspense>
    </div>
      

  )
}

export default App;

