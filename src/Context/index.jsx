import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const ShoppingCartContext = createContext();


function ShoppingCartProvider({ children }) {


    //Shopping Cart Counter
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () =>{
        setIsProductDetailOpen(true);
    }   
    const closeProductDetail = () =>{
        setIsProductDetailOpen(false);
    }

    //Product Detail - Show Product

    const [productToShow, setProductToShow] = useState({});



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
                setProductToShow
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