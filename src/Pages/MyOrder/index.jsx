import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {

    const context = useContext(ShoppingCartContext);

    const handleDecrementCartProductQuantity = (id) =>{
        const index = context.order.at(-1).products.findIndex(product => product.id === id);
        const newOrder = [...context.order];
        newOrder.at(-1).products[index].quantity--;
        context.setOrder(newOrder);
    }

    const handleIncrementCartProductQuantity = (id) =>{
        const index = context.order.at(-1).products.findIndex(product => product.id === id);
        const newOrder = [...context.order];
        newOrder.at(-1).products[index].quantity++;
        context.setOrder(newOrder);
    }

    return (
        <Layout>
            My order
            <div className="flex flex-col w-3/5">
                {
                    context.order.slice(-1)[0]?.products.map((product, index)=>{
                        console.log(product);
                        return(
                            <OrderCard 
                                key={index} 
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                                quantity={product.quantity}
                                incrementProductQuantity={handleIncrementCartProductQuantity} 
                                decrementProductQuantity={handleDecrementCartProductQuantity}
                            />
                        );  
                    })
                }
            </div>
        </Layout>
    )
}

export default MyOrder