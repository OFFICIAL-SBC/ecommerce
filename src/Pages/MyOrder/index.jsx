import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {

    const context = useContext(ShoppingCartContext);

    console.log("sajdaksnjfa",context.order?.slice(-1)[0]);
    return (
        <Layout>
            My order
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
                            incrementProductQuantity={context.incrementProductQuantity} 
                            decrementProductQuantity={context.decrementProductQuantity}
                        />
                    );  
                })
            }
        </Layout>
    )
}

export default MyOrder