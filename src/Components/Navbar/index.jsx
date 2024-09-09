import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import  NavItem  from '../NavItem'
import { TiShoppingCart } from "react-icons/ti";

const navItems = [
    { name: 'Shopi', to: '/', className: 'font-semibold text-xl', isActiveStyle: false },
    { name: 'All', to: '/', isActiveStyle: true },
    { name: 'Clothes', to: '/clothes', isActiveStyle: true },
    { name: 'Electronics', to: '/electronics', isActiveStyle: true },
    { name: 'Furnitures', to: '/furnitures', isActiveStyle: true },
    { name: 'Toys', to: '/toys', isActiveStyle: true },
    { name: 'Others', to: '/others', isActiveStyle: true }
];
const navItems2 = [
    {name: 'My Orders', to: '/my-orders', isActiveStyle: true },
    {name: 'My Account', to: '/my-account', isActiveStyle: true },
    {name: 'Sign In', to: '/sign-in', isActiveStyle: true }
]
const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    const handleCategoryClick = (category) => {
        context.setSearchByCategory(category);
    }
    
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                {navItems.map((item) => (
                    <NavItem
                        key={item.name}
                        to={item.to}
                        onClick={() => handleCategoryClick(item.name)}
                        className={item.className}
                        activeStyle={activeStyle}
                        isActiveStyle={item.isActiveStyle}
                        navbarName={item.name}
                    />
                ))}
            </ul>
            <ul className='flex items-center gap-3'>
                <li className="text-black/60">
                    gaston@gmail.com
                </li>
                {navItems2.map((item) => (
                    <NavItem
                        key={item.name}
                        to={item.to}
                        className={item.className}
                        activeStyle={activeStyle}
                        isActiveStyle={item.isActiveStyle}
                        navbarName={item.name}
                    />
                ))}
                <li className="flex items-center">
                    <TiShoppingCart className="size-6 cursor-pointer"
                                    onClick={()=>context.openCheckoutSideMenu()}/>
                    <div className="ml-2">{context.count}</div>  
                </li>
            </ul>

            
        </nav>
    )
}

export default Navbar