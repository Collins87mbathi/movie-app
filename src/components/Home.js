import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Hero from './Hero';
import Header from './Header';
import Favourite from './Favourite';
import Trending from './Trending';
import Series from './Series';

const Home = ({handleLogout}) => {



    return (
       <Router>
           <Header  handleLogout = {handleLogout}/>
           <Switch>
               <Route exact path='/'> <Hero/></Route>
               <Route path='/trending'><Trending/></Route>
               <Route path='/series'><Series/></Route>
               <Route path='/favourite'><Favourite/></Route>
           </Switch>
       </Router>
    )
}

export default Home
