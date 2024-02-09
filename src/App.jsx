import './App.css';
import { FetchData } from './fetchData';
import { Suspense } from 'react';
const apiData = FetchData('https://danit.pythonanywhere.com/api/v1/programers/')

function App() {
  const data = apiData.read();
  return (

      <div className='App'>
        <h1>Fetch de datos</h1>
        <Suspense fallback={<div>Loading...</div>} >
          <ul className='card'>
            {data?.map((user) => (
              <li key={user.id}>{user.fullname}</li>
            ))}
          </ul>
        </Suspense>
      </div>
      

  )
}

export default App;

