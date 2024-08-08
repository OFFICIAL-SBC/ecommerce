import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {

    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    

    return (
        <Layout>
            <div className="flex justify-center items-center w-2/5 relative  bg-black  rounded-lg p-3">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-white cursor-pointer ml-4"/>
                </Link>
                <h2 className="text-lg font-semibold text-white text-center">My order</h2>
            </div>
            
            <div  className="flex flex-col items-center w-2/5 mt-4">
                <p className="flex justify-between w-full rounded-2xl p-4 bg-black/40">
                    <span className="font-medium text-l">Date: </span>
                    <span className="font-normal text-l ">{context.order.slice(-1)[0]?.date}</span>
                </p>
                <p className="flex justify-between w-full rounded-2xl p-4 bg-black/40 m-2">
                    <span className="font-medium text-l">Number of products: </span>
                    <span className="font-normal text-l">{context.order.slice(-1)[0]?.totalProducts}</span>
                </p>
                <p className="flex justify-between w-full rounded-2xl p-4 bg-black/40 m-2">
                    <span className="font-medium text-l">Total price: </span>
                    <span className="font-normal text-l">${context.order.slice(-1)[0]?.totalPrice}</span>
                </p>
            </div>
            <div className="grid grid-cols-12 w-2/5 mb-6 border-b-2 border-black pb-2">
                <p className="text-lg font-semibold col-start-1 col-end-5 text-center"> Products </p>
                <p className="text-lg font-semibold col-start-7 col-end-10 text-center"> Quantity </p>
                <p className="text-lg font-semibold col-start-10 col-end-13 text-center"> Price </p>
            </div>
            <div className="flex flex-col w-2/5">
                {
                    context.order.slice(-1)[0]?.products.map((product, index)=>{
                        return(
                            <OrderCard 
                                key={index} 
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        );  
                    })
                }
            </div>
        </Layout>
    )
}

export default MyOrder