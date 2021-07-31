import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Trending = () => {

    
const [search , setSearch] = useState("");
  const [trending, setTrending] = useState([]);
const fetchTrending = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=04c35731a5ee918f014970082a0088b1&page=1');
    const data = await response.json();
    setTrending(data);
   

}
useEffect(()=>{
   fetchTrending();
},[]);



    return (
        <>
           <div className="search">
           <input className='inside'  value={search} onChange={(e)=>setSearch(e.target.value)} type = 'text' placeholder='search'/>
           </div>
         
        <div className='movies'>
           {trending.results?.filter((val)=> {
             if(search ==="") {
                 return val;
             }else if(val.title?.toLowerCase().includes(search?.toLowerCase())){
                 return val;
             }
           })?.map((trend)=>{
          
              const {id, title,vote_average, poster_path, vote_count} = trend;
             return (

                <article className='cocktail' key={id}>
                <div className='img-container'>
                  <img src={ "https://image.tmdb.org/t/p/w1280/" + poster_path} alt={title} />
                </div>
                <div className='cocktail-footer'>
                  <h3>{title}</h3>
                  <h4>{vote_average}</h4>
                  <p>{vote_count}</p>
                  <Link to={`/movie/${id}`} className='btn btn-primary btn-details'>
                    details
                  </Link>
                </div>
              </article>
               
             )
           })}
        </div>
        
        </>
    )
}

export default Trending
