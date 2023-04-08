import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';


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
          <Route path="/" element={<Home movies={movies} />} ></Route>

          </Route>
      </Routes>
  );
}

export default App;
