import './App.css';
import { FetchData } from './fetchData';
import { Suspense } from 'react';

const apiData = FetchData('http://127.0.0.1:8000/api/v1/programers/');

function App() {
  const data = apiData.read();
  console.log(data)
  return (

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

