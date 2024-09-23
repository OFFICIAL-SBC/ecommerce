import PropTypes from "prop-types";

const CustomInput = ({styleDiv,textLabel,placeholder,inputName,type,value,handleChange}) => {
        return(
            
            <div className={styleDiv}>
                
                    <label htmlFor={inputName} className={`relative`}>
                        <input
                            type={type}
                            id={inputName}
                            name={inputName}
                            placeholder={placeholder}
                            value={value}
                            className={`rounded-lg border w-full border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none p-3 px-4 peer focus:border-indigo-600 bg-white`}
                            onChange={handleChange}/>

                        <span className="absolute left-3 top-3 px-1 text-base tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-white">{textLabel.charAt(0).toUpperCase() + textLabel.slice(1)}</span>
                    </label>
            </div>
        );
}


CustomInput.propTypes = {
    styleDiv: PropTypes.string,
    textLabel: PropTypes.string,
    placeholder: PropTypes.string,
    inputName: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string, 
    handleChange: PropTypes.func
}

export {CustomInput};