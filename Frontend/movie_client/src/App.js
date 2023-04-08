import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';


function App() {
  const [movies, setMovies] = useState([]);


const getMovies = async () =>{
  try
  {

    const response = await api.get("/api/v1/movies");
    setMovies(response.data);
    console.log('---')

  } 
  catch(err)
  {
    console.log(err);
  }
}

useEffect(() => {
  getMovies();
},[])

 
  return (
    <Routes>
          <Route path="/" element={<Layout/>}>
          </Route>
      </Routes>
  );
}

export default App;
