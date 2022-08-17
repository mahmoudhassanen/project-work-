import { createContext, useEffect, useState } from "react";
 import {  gql, useQuery    } from '@apollo/client';
import { Remove } from "@mui/icons-material";
export let DataContext = createContext()
export function DataContextProvider(props) { 



  const GET_Products = gql`
  query category {
    category {
      products{
        id,
        name,
        gallery,
        brand,
        description,
        inStock,
        
        category
       
        
      }
    }
  }

`;
const GET_currencies = gql`
query category {
    currencies {
   label,
   symbol
  }
}

`;

/////////////////// Cart ///////////// 
let [Cart, setCart] = useState([])
let { data } = useQuery(GET_Products)
const [Data, setData] = useState([])
var getLocalStorage = localStorage.getItem("Data");
useEffect(() => {
  setData(data.category.products)
  console.log(Data)
}, [])

let AddCart = (id) => {


  const product = [...Data]
  console.log(product)
  const check = Cart.every((product) => {
      return product.id !== id;
  })
  if (check) {
    const data = product.filter(product => {
      return product.id === id
  })
  setCart([...Cart, ...data])
  localStorage.setItem("Data" , JSON.stringify([...Cart , ...data]));
  console.log(Cart)


    
  }
  else {
    alert("the product has been added to cart")
    
   
}


}
const [Count, setCount] = useState(1)

let increase = (id) => 
{
  
  Cart.forEach((item)=> 
      {
         if (item.id === id) {
          setCount(Count+1)
         }
      })
}
let decrease = (id) => 
{
  Cart.forEach((item)=> 
      {
         if (item.id === id) {
          setCount(Count-1)
          }
          
      })
      if (Count === 1 ) {
    
        setCount(1)
        
        
      }
 

}
if (getLocalStorage === null) {
       
  <>
     <h2 style={{testAlign : "center" , fontSize : "30px"}}> Cart Empty</h2>
  </>
}
else
{
Cart =  JSON.parse( localStorage.getItem("Data"));
}

const RemoveProduct = id => 
{
if (window.confirm("Do you want delete this product?")) {
  Cart.forEach((item , index) => {
    if (item.id === id ) {
      Cart.splice(index , 1)
      
    }
    
  })
  setCart([...Cart])
  localStorage.setItem("Data" , JSON.stringify([...Cart]));

}
}


    return <DataContext.Provider value={{GET_Products , GET_currencies , AddCart , Cart ,Count ,increase  ,decrease , RemoveProduct }} >
        {props.children} 
    </DataContext.Provider>


}