import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import  ShoppingCart  from '../ShoppingCart';

const NavBar = () => {

    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext);
    const HandleSignOut = () => {
        localStorage.setItem('sign-out',JSON.stringify(true));
        context.setSignOut(true);
    }

    //Sign Out
    const signOutLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutLocalStorage);
    const isUserSignOut = context.signOut || parsedSignOut;

    // Account
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);

    //Has an account?
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0: true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;


    const renderView = () => {
        if(hasUserAnAccount && !isUserSignOut){
            return(
                <Fragment>
                    <li className="text-black/60">
                        {parsedAccount?.email}
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
                        <NavLink 
                            to='/sign-in'
                            className={({isActive})=> isActive ? activeStyle : null} 
                            onClick={()=> HandleSignOut()}
                            >
                            Sign Out
                            </NavLink>
                    </li>
                    <li className="flex items-center">
                        <ShoppingCart />
                    </li>
                </Fragment>
            );
        }else{
            return(
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({isActive}) => isActive ? activeStyle: null}
                        onClick={()=>HandleSignOut()}
                    >
                        Sign Out
                    </NavLink>
                </li>
            );
        }
    }

    return (
        <nav className="flex justify-between items-center py-5 px-8 text-sm font-light">
            <ul className="flex justify-center items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to={`${isUserSignOut ? '/sign-in':'/'}`}
                        onClick={()=> context.setSearchByCategory('')}
                    >
                        GymHill
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> context.setSearchByCategory('')}
                    >All</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> context.setSearchByCategory('clothing')}
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> context.setSearchByCategory('electronics')}    
                    >Electronics</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelry'
                        className={({isActive})=> isActive ? activeStyle : null}
                        onClick={()=> context.setSearchByCategory('jewelery')}    
                    >Jewelry</NavLink>    
                </li>
            </ul>

            <ul className="flex justify-center items-center gap-3">
                {renderView()}
            </ul>
        </nav>
    );
}

export { NavBar };