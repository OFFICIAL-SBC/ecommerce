import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');

    if(!accountInLocalStorage){
        localStorage.setItem('account',JSON.stringify({}));
    }

    if(!signOutInLocalStorage){
        localStorage.setItem('sign-out',JSON.stringify(true));
    }
}


function ShoppingCartProvider({ children }) {

    // ! My account
    const [account, setAccount] = useState({});

    // ! Sign Out
    const [signOut, setSignOut] = useState(true);


    // ! Shopping Cart Counter
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    // ! Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () =>{
        setIsProductDetailOpen(true);
    }   
    const closeProductDetail = () =>{
        setIsProductDetailOpen(false);
    }

    // ! Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    // ! Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    const addNewProductToCart = (product) =>{
        const newProducts = [...cartProducts];
        newProducts.push(product);
        setCartProducts(newProducts);
    }

    // ! Checkout side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    
    const openCheckoutSideMenu = () =>{
        setIsCheckoutSideMenuOpen(true);
    }   
    const closeCheckoutSideMenu = () =>{
        setIsCheckoutSideMenuOpen(false);
    }

    // ! Checkout side Menu - Delete product from cart

    const deleteProductFromCart = (id) =>{
        const newPorducts = [...cartProducts];
        const index = newPorducts.findIndex(product => product.id === id);
        newPorducts.splice(index, 1);
        decrement();
        setCartProducts(newPorducts);
    }

    const emptyProductCart = () => {
        setCartProducts([]);
        setCount(0);
    }


    // ! Chechout side Menu - Order
    const [order,setOrder] = useState([]);


    // ! Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');

    // ! Get products by category
    const [searchByCategory, setSearchByCategory] = useState('');
    


    return (
        <ShoppingCartContext.Provider value={
            {
                count,
                increment,
                decrement,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                addNewProductToCart,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                deleteProductFromCart,
                emptyProductCart,
                order,
                setOrder,
                searchByTitle,
                setSearchByTitle,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    );
}

ShoppingCartProvider.propTypes  ={
    children: PropTypes.node.isRequired
}

export { ShoppingCartProvider, ShoppingCartContext };