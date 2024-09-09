import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const context = useContext(ShoppingCartContext)
  const renderview = () => {
      if(context.filteredProducts?.length > 0){
        return(
          context.filteredProducts?.map((item)=> (
            <Card key = {item.id} data={item}/>
          )) 
        )
      }else {
        return(
          <div className="ml-3">Product not found :(</div>
        )
      }      
  }
  return (
    <Layout>
      <div className="flex w-80 justify-center relative items-center mb-6">
        <h1 className='font-medium'>Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
       <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderview()}
       </div>
       <ProductDetail/>
    </Layout>
  )
}

export default Home
