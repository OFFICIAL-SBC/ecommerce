import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from 'react-router-dom';

function MyOrders() {
    const context = useContext(ShoppingCartContext);
    console.log(context.order);

    return (
        <Layout>
            <div className="flex justify-center items-center w-80 relative">
                <h1>My orders</h1>
            </div>
            <div className="w-3/5">
                {
                    context.order.map((order,index)=>{
                        return(
                            <Link
                                key={index}
                                to={`/my-orders/${index}`}>
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