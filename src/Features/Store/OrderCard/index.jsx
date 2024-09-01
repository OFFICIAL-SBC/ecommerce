import { TrashIcon,PlusIcon,MinusIcon } from "@heroicons/react/24/solid";
import { PropTypes } from "prop-types";


const OrderCard = (props) => {

    const {id, title, imageUrl, price, quantity, incrementProductQuantity, decrementProductQuantity, deleteProductFromCart} = props;
    return (
        <div className="flex justify-between items-center w-full h-24 bg-white p-2 border-b-2 border-black">
            <div className="flex items-center gap-2 w-2/5">
                <figure className="w-3/5 h-20">
                    <img className="w-full h-full rounded-lg object-contain" src={imageUrl} alt={title} />
                </figure>
                <p className="text-xs font-normal w-2/5 truncate">{title}</p>
            </div>
            <div className="flex w-1/5 justify-center items-center">
                <MinusIcon onClick={(event)=>{
                    event.stopPropagation();
                    event.preventDefault();
                    if(quantity > 1) decrementProductQuantity(id);
                    
                }} className={`${decrementProductQuantity ? '':'hidden'} h-5 w-5 text-black cursor-pointer`}/>
                <p className="text-sm font-medium text-center mx-2">{quantity}</p>
                <PlusIcon onClick={(event)=>{
                    event.stopPropagation();
                    event.preventDefault();
                    incrementProductQuantity(id);
                }} 
                className={`${incrementProductQuantity ? '':'hidden'} h-5 w-5 text-black cursor-pointer`}/>
            </div>
            <div className="flex items-center justify-between bg-white gap-2">
                <p className={`${deleteProductFromCart ? '': 'pr-6'} text-lg font-medium`}>$ {(price*quantity).toFixed(2)}</p>
                {deleteProductFromCart && <TrashIcon onClick={()=> {
                    deleteProductFromCart(id);
                }} className="h-5 w-5 text-black/60 cursor-pointer" />}
            </div>
        </div>
    );
}

OrderCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    incrementProductQuantity: PropTypes.func,
    decrementProductQuantity:PropTypes.func,
    deleteProductFromCart:PropTypes.func
}


export default OrderCard;