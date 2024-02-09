import './App.css';
import { fetchData } from './fetchData';
import { Suspense } from 'react';

const apiData = fetchData("http://localhost:8000/api/v1/programers/");
function App() {
  const data = apiData.read();
  return (
    <>
    
      
    </>
  )
}

export default App;
