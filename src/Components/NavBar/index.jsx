import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {

    const activeStyle = "underline underline-offset-4";
    const { count,setSearchByCategory } = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center py-5 px-8 text-sm font-light">
            <ul className="flex justify-center items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                        onClick={()=> setSearchByCategory('')}
                    >
                        GymHill
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> setSearchByCategory('')}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> setSearchByCategory('clothing')}
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> setSearchByCategory('electronics')}    
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelry'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> setSearchByCategory('jewelery')}    
                    >Jewelry</NavLink>    
                </li>
            </ul>

            <ul className="flex justify-center items-center gap-3">
                <li className="text-black/60">
                    sebastian
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive})=> isActive ? activeStyle : null} 
                    > My Orders</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive})=> isActive ? activeStyle : null} >
                        My Account</NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black"/>
                    <div>{count}</div>
                </li>
            </ul>
        </nav>
    );
}

export { NavBar };