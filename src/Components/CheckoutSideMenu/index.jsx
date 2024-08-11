import { useContext } from 'react';
import './styles.css';
import { XMarkIcon} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice, getFormattedDate } from '../../Utils';

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext);
    const classMainContainer = `${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu flex flex-col justify-between items-center fixed right-0 bottom-0 border border-black rounded-lg bg-white `;

    const handleCheckout = () => {
        const orderToAdd = {
            date: getFormattedDate(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        };

        context.setSearchByTitle('');
        context.setOrder([...context.order, orderToAdd]);
        context.emptyProductCart();
        context.closeCheckoutSideMenu();
    }

    const handleIncrementProductQuantity = (id) => {
        const newProducts = [...context.cartProducts];
        const index = newProducts.findIndex(product => product.id === id);
        newProducts[index].quantity++;
        context.setCartProducts(newProducts);
    };

    const handleDecrementProductQuantity = (id) => {
        const newProducts = [...context.cartProducts];
        const index = newProducts.findIndex(product => product.id === id);
        newProducts[index].quantity--;
        context.setCartProducts(newProducts);
    };

    return (
        <aside className={classMainContainer}>
            <div className='flex w-full justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon onClick={()=>{
                    context.closeCheckoutSideMenu();
                }} className='h-6 w-6 cursor-pointer'/>
            </div>
            
            <div className='flex flex-col gap-2 items-stretch w-full h-full p-2 overflow-y-scroll'>
            {
                context.cartProducts.map((product, index)=>{
                    return(
                        <OrderCard 
                            key={index} 
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            quantity={product.quantity}
                            incrementProductQuantity={handleIncrementProductQuantity} 
                            decrementProductQuantity={handleDecrementProductQuantity}
                            deleteProductFromCart ={context.deleteProductFromCart} 
                        />
                    );  
                })
            }
            </div>

            <div className='w-full px-5 m-3'>
                <p className='flex justify-between'>
                    <span className='font-medium'>Total:</span>
                    <span className='font-semibold text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className='bg-black py-3 text-white w-full my-3 rounded-lg' onClick={()=>{
                        handleCheckout();
                    }}>Checkout</button>
                </Link>
            </div>

        </aside>
    );
}


export default CheckoutSideMenu;