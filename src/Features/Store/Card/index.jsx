import { useContext } from "react";
import { ShoppingCartContext } from "../../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) =>{

    const { 
        increment,
        openProductDetail, 
        setProductToShow,
        addNewProductToCart,
        openCheckoutSideMenu,
        closeProductDetail,
        closeCheckoutSideMenu,
        cartProducts
    } = useContext(ShoppingCartContext);

    const showProduct = (productDetail) =>{
        closeCheckoutSideMenu();
        openProductDetail();
        setProductToShow(productDetail);
    }

    const renderIcon = (id) =>{
        
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;
        if(isInCart){
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2"
                onClick={(event)=>{
                    event.stopPropagation(); //Avoids the event to propagate to the parent element
                }}>
                    <CheckIcon className="w-6 h-6 text-white"/>
                </div>
            );
        }else{
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                onClick={
                    (event)=>{
                        event.stopPropagation(); //Avoids the event to propagate to the parent element
                        increment();
                        addNewProductToCart({...data.data, quantity: 1});
                        openCheckoutSideMenu();
                        closeProductDetail();
                    }}>
                    <PlusIcon className="w-6 h-6 text-black"/>
            </div>
            );
        }
        

    }
    

    return (
        <div className="bg-white cursor-pointer w-56 h-60 m-2"
            onClick={()=>showProduct(data.data) }>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-xl text-xs m-2 p-1">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image}/>
                {renderIcon(data.data.id)}  
            </figure>
            <p className="flex justify-between px-2">
                <span className="text-sm font-light w-2/3 truncate">{data.data.title}</span>
                <span  className="text-lg font-semibold w-1/3">${data.data.price}</span>
            </p>
        </div>
    );
}

export default Card;