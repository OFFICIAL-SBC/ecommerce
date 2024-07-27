const Card = () =>{
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-xl text-xs m-2 p-1">Category</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">+</div>
            </figure>
            <p className="flex justify-between px-2">
                <span className="text-sm font-light">Product</span>
                <span  className="text-lg font-semibold">$1000</span>
            </p>
        </div>
    );
}

export default Card;