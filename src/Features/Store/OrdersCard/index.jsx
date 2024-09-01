import { ChevronRightIcon,CalendarDaysIcon,ShoppingBagIcon } from "@heroicons/react/24/solid";
import { PropTypes } from "prop-types";


const OrdersCard = (props) => {

    const { date, totalPrice, totalProducts } = props;
    return (
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
            <p className="flex justify-between w-full">
                <div className="flex flex-col w-2/5">
                    <div className="flex justify-between w-full">
                        <CalendarDaysIcon className="h-6 w-6 text-black" />
                        <span className="font-normal">{date}</span>
                    </div>
                    <div className="flex justify-between  w-full">
                        <ShoppingBagIcon className="h-6 w-6 text-black" />
                        <span className="font-normal">{totalProducts} Articles</span>
                    </div> 
                </div>
                <div className="flex justify-between items-center w-2/5">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" /> 
                </div>
            </p>
        </div>
    );
}

OrdersCard.propTypes = {
    date: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
}


export default OrdersCard;