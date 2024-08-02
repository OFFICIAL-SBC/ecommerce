import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () =>{

    const context = useContext(ShoppingCartContext);
    const classMainContainer = `${context.isProductDetailOpen ? 'flex':'hidden'} product-detail flex flex-col fixed right-0 bottom-0 border border-black rounded-lg bg-white `;
    return (
        <aside className={classMainContainer}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon onClick={()=>{
                    context.closeProductDetail();
                }} className='h-6 w-6'/>
            </div>
        </aside>
    );
}


export default ProductDetail;