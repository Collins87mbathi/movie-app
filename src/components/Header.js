import React from 'react'
import { Link } from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {BiMovie} from 'react-icons/bi'
import {GiEternalLove} from 'react-icons/gi'


const Header = ({handleLogout}) => {
    return (
        <div>
            <header className='head'>
                <h2 className="title"><Link to = '/'>Perez Movies</Link></h2>
                <div  className='logout'>
               <button onClick={handleLogout}>logout</button>
               </div> 
            </header>
            <nav className='links'>
            <Link to ='/trending'><FaFire/></Link>
            <Link to ='/series'><BiMovie/></Link>
            <Link to ='/favourite'><GiEternalLove/></Link>
            </nav>
        </div>
    )
}

export default Header
