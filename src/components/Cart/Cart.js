import React, { useContext, useEffect, useState  } from 'react'
import { DataContext } from '../../Data'
import './Cart.css'

export default function Cart() {
    let {Cart , Count  ,increase , decrease , RemoveProduct} = useContext(DataContext)
    const [data, setdata] = useState([])
    useEffect(() => {
     setdata(Cart)
     console.log(Cart)
    }, [Cart])
    
    if (Cart.lenth === 0 ) {
        return <h2 style={{testAlign : "center" , fontSize : "30px"}}> Cart Empty</h2>
      }
let JSxElement = Cart.map((product) => 
<div key={product.id}>


<div className='row'>
<div className='col-md-8'>
<div>
<h3> {product.name}.</h3>

<h4 className='mt-4'> $50.00</h4> 
<div className='btngroup mt-5'>


<button type="" className='count1 me-2 '  onClick=  {()=>  decrease(product.id) } >  -  </button>
<span >  {Count}  </span>
<button type="" className='count2 ms-2'   onClick=  {()=>  increase(product.id) }  >  +  </button>
<div className='delete'>
<i class="fa fa-times" aria-hidden="true" onClick={()=> RemoveProduct(product.id)}></i>
</div>
</div> 
</div>

</div>
<div className='col-md-4'>
<div>

<img src={product.gallery} alt="" className='w-25 ms-5'/>
</div>
</div>

</div>

<hr/>

</div>
)
  return (
    <div className='container Cart py-5'>
        
        <h2 className='mb-5'> Cart</h2>
        <hr className='mb-5'/>
       
         {Cart && JSxElement}
       
          
    </div>
  )
}
