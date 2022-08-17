import React, { useContext, useEffect, useState } from 'react'
import { useQuery   } from '@apollo/client';
import {DataContext} from '../../Data'
import { Link } from 'react-router-dom';

export default function Clothes() {
let {GET_Products} =useContext(DataContext)
    const [dataGallery, setdataGallery] = useState([])
  const [Filter, setFilter] = useState(dataGallery)
  const [Stock, setStock] = useState(dataGallery)

  const { loading, error, data }  = useQuery(GET_Products);
console.log(data.category.products)
function get() {
  let datas = {...data}
  setdataGallery(datas.category.products)
  console.log(datas)
}

const  dataProduct = () => {
  const UpdateData = data.category.products.filter((x)=>x.category === 'clothes' );
  setFilter(UpdateData)
  console.log(UpdateData)
 
  
} 
const  GetStock = () => {
  const stocks = data.category.products.filter((x)=>x.inStock === 'false' );
  setStock(stocks)
  console.log(stocks)
 
  
}
useEffect(() => {
// console.log(data)
get();
dataProduct();
GetStock()
}, [])

  return (
    <div className='container'>
    
       <div className='row mt-5'>
        
   
       <h2 className='fw-bolder'> Category name</h2>
       {Filter.map((product , id) => 

        <div key={id} className='col-lg-6 col-md-6 col-sm-12 py-1'>
          <div className='product ms-5 mt-5'>
            
          <Link to={`/details/${product.id}`}>
           <img src={product.gallery} alt="" className=' py-3'/> 
          
       
          <h3 className='py-1'>  {product.brand}  </h3>
          <p>   $50  </p>
          </Link>
          <div className='icon'>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
          </div>
        </div>
    
      )}
         </div>
    </div>
            

   
  )
}
