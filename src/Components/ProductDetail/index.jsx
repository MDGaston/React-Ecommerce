import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { IoMdCloseCircleOutline } from "react-icons/io";


const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><IoMdCloseCircleOutline className='size-6 cursor-pointer'
                        onClick={()=> context.closeProductDetail()}/></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.images} 
                alt={context.productToShow.title}></img>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-2md mb-1'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail