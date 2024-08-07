import { TrashIcon,PlusIcon,MinusIcon } from "@heroicons/react/24/solid";
import { PropTypes } from "prop-types";


const OrderCard = (props) => {

    const {id, title, imageUrl, price, quantity, incrementProductQuantity, decrementProductQuantity, deleteProductFromCart} = props;

    return (
        <div className="flex justify-between items-center w-full rounded-xl h-24 bg-white p-2">
            <div className="flex items-center gap-2 w-2/5">
                <figure className="w-3/5 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-xs font-normal w-2/5 truncate">{title}</p>
            </div>
            <div className="flex w-1/5 justify-between items-center">
                <MinusIcon onClick={(event)=>{
                    event.stopPropagation();
                    if(quantity > 1) decrementProductQuantity(id);
                    
                }} className="h-5 w-5 text-black cursor-pointer" />
                <p className="text-sm font-medium ">{quantity}</p>
                <PlusIcon onClick={(event)=>{
                    event.stopPropagation();
                    incrementProductQuantity(id);
                }} 
                className="h-5 w-5 text-black cursor-pointer" />
            </div>
            <div className="flex items-center justify-between bg-white gap-2">
                <p className="text-lg font-medium">$ {(price*quantity).toFixed(2)}</p>
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
    incrementProductQuantity: PropTypes.func.isRequired,
    decrementProductQuantity:PropTypes.func.isRequired,
    deleteProductFromCart:PropTypes.func
}


export default OrderCard;