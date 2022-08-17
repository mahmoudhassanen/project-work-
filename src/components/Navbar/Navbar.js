import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { DataContext } from '../../Data';
import { useQuery } from '@apollo/client/react';



export default function Navbar(props) {
  let {GET_currencies ,Cart} =useContext(DataContext)
  const [currencies, setcurrencies] = useState([])
  let {data} = useQuery(GET_currencies)

  useEffect(() => {
    setcurrencies(data.currencies)
    console.log(data.currencies)
  }, [])
  
  
 
  return (
    
    <div >
<nav className="navbar navbar-expand-lg ">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to='Clothes'>Clothes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="Tech">Tech</NavLink>
        </li>
   
        
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            $
          </a>
          <ul className="dropdown-menu">
            {currencies.map((currencies , index) => 
                <li key={index} className='mb-2'><a className="dropdown-item"  href="#"> <span className='me-1'> {currencies.symbol}</span> {currencies.label}</a></li>
            )}
        
          
          </ul>
        </li>
        <li className='nav-item  ms-2'>
         <Link to='Cart'> 
         <i className="fa-solid fa-cart-shopping"> <span> {Cart.length} </span></i>
         </Link>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>
    </div>
  )
}
