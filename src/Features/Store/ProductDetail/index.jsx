import { useContext } from 'react';
import './styles.css';
import { XMarkIcon, ShoppingCartIcon,CheckCircleIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../../Context';

const ProductDetail = () =>{

    const context = useContext(ShoppingCartContext);
    const classMainContainer = `${context.isProductDetailOpen ? 'flex':'hidden'} product-detail flex flex-col items-center fixed right-0 bottom-0 border border-black rounded-lg bg-white `;

    const buyButton = (id) =>{
        const isProductOnCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if(isProductOnCart){
            return (
                <div className='flex w-1/2 justify-evenly text-white'>
                    <span className=' font-normal text-black'>Already in the cart</span>
                    <CheckCircleIcon className='h-6 w-6 text-black'/>
                </div>
            );
        }else{
            return (
                <div className='flex justify-evenly items-center w-1/2 h-10 rounded-lg bg-black'>
                    <button onClick = {(event)=>{
                        event.preventDefault();
                        event.stopPropagation();
                        context.addNewProductToCart({...context.productToShow, quantity: 1});
                        context.increment();
                    }} className='text-white'>Add to the cart</button>
                    <ShoppingCartIcon className='h-6 w-6 text-white'/>
            </div>
            );
        }
    }

    return (
        <aside className={classMainContainer}>
            <div className='flex w-full justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon onClick={()=>{
                    context.closeProductDetail();
                }} className='h-6 w-6 cursor-pointer'/>
            </div>
            <figure className='px-6 h-2/5 '>
                <img className="w-full h-full rounded-lg object-contain" src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>{context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm max-h-28 overflow-clip'>{context.productToShow.description}</span>
            </p>

            {buyButton(context.productToShow.id)}

        </aside>
    );
}


export default ProductDetail;