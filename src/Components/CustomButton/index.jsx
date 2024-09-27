import PropTypes from "prop-types";

const CustomButton = ({buttonText,onClick})=>{

    //Here I need to stablish tje primary and secondary button
    const primaryStyle = "bg-black text-white w-full rounded-lg py-3 mt-4 mb-2";
    //const secondaryStyle="bg-black text-white w-full rounded-lg py-3";

    return(
        <button
            className={primaryStyle}
            onClick={() => onClick()}
        >
            {buttonText}
        </button>
    );
}

CustomButton.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export {CustomButton};