import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { UseMovie } from '../Context';

import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'
const Favourite = () => {

    const {more,Increment,Decrement} = UseMovie();
    const [search, setSearch] = useState('');

  const [series, setSeries] = useState([]);
const fetchSeries = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3");
    const data = await response.json();
    setSeries(data);
    console.log(data);
   

}
useEffect(()=>{
   fetchSeries();
},[more]);



    return (
        <>
           <div className="search">
           <input className='inside' type = 'text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search'/>
           </div>
         
        <div className='movies'>
           {series.results?.filter((val)=> {
               if(search === "") {
                   return val
               } else if(val.name?.toLowerCase().includes(search?.toLowerCase())) {
                   return val
               }
           })?.map((serie)=>{
          
              const {id,vote_average, poster_path, vote_count,name} = serie;
             return (

                <article className='cocktail' key={id}>
                <div className='img-container'>
                  <img src={ "https://image.tmdb.org/t/p/w1280/" + poster_path} alt={name} />
                </div>
                <div className='cocktail-footer'>
                  <h3>{name}</h3>
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


        <div className ="moving">
        <button className='previous' onClick={Decrement}><FcPrevious/></button>
            <button className='next' onClick={Increment}><FcNext/></button>
           
        </div>
        </>
    )
}

export default Favourite


