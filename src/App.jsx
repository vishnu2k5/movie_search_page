import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Moviecard from "./components/Moviecard";
import { useDebounce } from "react-use";
import { updateSearchCount,getTrendingMovies } from "./appwrite";


const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method:"GET",
  headers:{
    accept: 'application/json',
    Authorization:`Bearer ${API_KEY} `
  }
}

const App = () => {
  const [searchTerm,setsearchTerm] = useState("")
  const [movieList,setmovieList] = useState([])
  const [isLoading,setisLoading] = useState(false)
  const [errormessage,seterrormessage] = useState("")
  const [debounsearch,setdebounsearch] = useState("")
  const [trendingMovies, setTrendingMovies] = useState([]);


  useDebounce(()=>setdebounsearch(searchTerm), 500 ,[searchTerm])

  const fetchMovies = async (query) => {
    setisLoading(true)
    try{
      const endppint = query? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endppint,API_OPTIONS)
  
      if(!response.ok){
        throw new Error("failed to fetch data");
      }
      const data = await response.json()
      console.log(data)
      if(data.Response == 'false'){
        seterrormessage("sometingwentwrong" && `${data.Error}`)
        throw Error(`${data.Error}something went wrong`)
      }
      setmovieList(data.results || [])
      
      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch(error){
      console.log(`there is an error in fetching ${error}`)
      seterrormessage(error)
      throw Error(error);
      
    }finally{
      setisLoading(false)
    }
  }
  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();

      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  }

  useEffect(()=>{
    fetchMovies(searchTerm);

  },[debounsearch])
  useEffect(()=>{
    loadTrendingMovies();
  },[])
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="hero.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
          </h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>
        
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2 className="mt-[40px]">All movies</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errormessage ? (
            <p className="text-white">{errormessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
               <Moviecard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
