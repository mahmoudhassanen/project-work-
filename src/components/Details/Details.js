import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../Data'
import { useQuery } from '@apollo/client/react'
import './Details.css'

export default function Details() {
    let {GET_Products} = useContext(DataContext)
    let {AddCart} =useContext(DataContext)
    const [product, setproduct] = useState([])
    const [gallery, setgallery] = useState([])
  
    let {data} =useQuery(GET_Products);
    let parm = useParams();  
 

 
  function GetProduct() {
    

    if (parm.id) {
      const Data = data.category.products.filter((item => {
        return item.id === parm.id
      })
      )
      setproduct(Data)
       
      console.log(Data)
      console.log(Data)
      console.log(Data.gallery);


    }
}

    useEffect(() => {
        GetProduct()
       
    }, [])
    


    
  return (
    <div className='container '>
      
        <div className='details-parent'>
          
     
      
           {
            product.map((product) => 
            <div key={product.id}>
              <div className='wrap1'>
                <img src={product.gallery} alt="" className='w-50'/>
              </div>
              <div className='wrap2'>
                <h2 className='mb-5'> {product.name}. </h2>
                <p className='brand'> Brand :  <span>  {product.brand}. </span>   </p>
                <p className='category'> Category : <span>  {product.category} </span>   </p>
                 <p className='desc'> Desc:  Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
             
                  <button type="" className='btn' onClick={()=> { AddCart(product.id)} }> Add To Cart</button>
                
              </div>
            </div>
            )
           }
              </div>
        
    </div>
  )
}

