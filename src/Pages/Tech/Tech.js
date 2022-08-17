import React, { useContext, useEffect, useState } from 'react'
import { useQuery   } from '@apollo/client';
import {DataContext} from '../../Data'
import { Link } from 'react-router-dom';

export default function Tech() {
  let {GET_Products} =useContext(DataContext)
    const [dataGallery, setdataGallery] = useState([])
  const [Filter, setFilter] = useState(dataGallery)
  const { loading, error, data }  = useQuery(GET_Products);
  const [Stock, setStock] = useState(dataGallery)
console.log(data.category.products)
function get() {
  let datas = {...data}
  setdataGallery(datas.category.products)
  console.log(datas)
}

const  dataProduct = () => {
  const UpdateData = data.category.products.filter((x)=>x.category === 'tech' );
  setFilter(UpdateData)
  console.log(UpdateData)
 
  

} 
const  GetStock = () => {
  // const stocks = data.category.products.filter((x)=>x.inStock === false );
  // setStock(stocks)
  // console.log(stocks)
  
 
  
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
        
   
        <h2 className='fw-bolder mb-5'> Category name</h2>
        {Filter.map((product) => 
 
         <div key={product.id} className='col-lg-4 col-md-6 col-sm-12 py-1 '>
          
            {product.inStock === false ? <> 
              <div  className='product ms-5'>
              <img src={product.gallery} alt="" className=' py-3'/> 
             <div className='overlay d-flex justify-content-center align-items-center'>
              
              <h2 className='overlayp'>  OUT STOCK  </h2>
            
             
          
             
            
           
             </div>
             </div>
          

            </> : 
            <>
            <div  className='product ms-5'>
             
             
             <Link to={`/details/${product.id}`}>
             <img src={product.gallery} alt="" className=' py-3'/> 
             </Link>
             <h3 className='py-1'>  {product.brand}  </h3>
             <p>   $50  </p>
             <div className='icon'>
             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
             </div>
            
             </div>
            
            </>}
       
           
    
         </div>
     
       )}
          </div>
     </div>
                   
   
  )
}
