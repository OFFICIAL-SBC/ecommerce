import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {


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
        console.log('PRODUCTS IN CART: ', newProducts);
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
    console.log('searchByTitle',searchByTitle);
    


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
                setSearchByTitle
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