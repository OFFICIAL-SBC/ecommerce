import { NavLink } from "react-router-dom";

const NavBar = () => {

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center py-5 px-8 text-sm font-light">
            <ul className="flex justify-center items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'
                    >
                        GymHill
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive})=> isActive ? activeStyle : null}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive})=> isActive ? activeStyle : null}
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive})=> isActive ? activeStyle : null}    
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({isActive})=> isActive ? activeStyle : null}   
                    >Furniture</NavLink>    
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        className={({isActive})=> isActive ? activeStyle : null}  
                    >Others</NavLink>    
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
                <li>
                    Shopping car
                </li>
            </ul>
        </nav>
    );
}

export { NavBar };