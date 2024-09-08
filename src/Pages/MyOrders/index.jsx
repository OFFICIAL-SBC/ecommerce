import { useContext } from "react";
import Layout from "../../Layout";
import OrdersCard from "../../Features/Store/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout css='flex flex-col items-center mt-10'>
            <div className="flex justify-center items-center w-80 relative mb-4">
                <h1 className="font-medium text-xl">My orders</h1>
            </div>
            <div className="flex flex-col items-center w-3/5">
                {
                    context.order.map((order,index)=>{
                        return(
                            <Link
                                key={index}
                                to={`/store/my-orders/${index}`}>
                                <OrdersCard 
                                    date={order.date}
                                    totalPrice = {order.totalPrice}
                                    totalProducts = {order.totalProducts}
                                />
                            </Link>
                        );
                    })
                }
            </div>
            
        </Layout>
    )
}

export default MyOrders;