import './styles.css'
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';

import { IoMdCloseCircleOutline } from "react-icons/io";

import { totalPrice } from '../../utils';


const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)
    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }
    const handleCheckout = () =>{
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }
    return(
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <IoMdCloseCircleOutline className='size-6 cursor-pointer'
                        onClick={()=> context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
                {
                    context.cartProducts.map(product =>(
                        <OrderCard
                            key = {product.id} 
                            id = {product.id}
                            title = {product.title}
                            imageUrl = {product.images}
                            price = {product.price}
                            handleDelete = {handleDelete}
                        />
                    ))
                }
            </div>

            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium'> Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-black py-3 rounded-lg text-white w-full mb-6 mt-2' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
                
            </div>               
            
        </aside>
    )
}

export default CheckoutSideMenu