import PropTypes from "prop-types";

const CustomInput = ({styleDiv,styleLabel,styleInput,textLabel,placeholder,inputName,type,value, defaultValue,handleChange}) => {
        return(
            <div className={styleDiv}>
                    <label htmlFor={inputName} className={styleLabel}>{textLabel.charAt(0).toUpperCase() + textLabel.slice(1)}</label>
                    <input
                        type={type}
                        id={inputName}
                        name={inputName}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        value={value}
                        className={styleInput}
                        onChange={handleChange}/>
            </div>
        );
}


CustomInput.propTypes = {
    styleDiv: PropTypes.string,
    styleLabel: PropTypes.string,
    styleInput: PropTypes.string,
    textLabel: PropTypes.string,
    placeholder: PropTypes.string,
    inputName: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string, 
    defaultValue: PropTypes.string,
    handleChange: PropTypes.func
}

export {CustomInput};