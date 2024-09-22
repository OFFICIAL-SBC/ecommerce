import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { CustomInput } from "../CustomInput";

const CustomForm = forwardRef(
  ({ fields, onSubmit, styles, children}, ref) => {
    const [formValues, setFormValues] = useState(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: field.default }), {})
    );

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    const textLabelOptions = {
        name:"Your Name: ",
        email:"Your email: ",
        password:"Your password: "
    }

    return (
        <form ref={ref} onSubmit={handleSubmit} className={styles}>
            {fields.map((field, index) => {
                console.log(field.default);
                return (
                    <CustomInput
                    key={index}
                    value={formValues[field.name]}
                    type={field.type}
                    inputName={field.name}
                    textLabel={textLabelOptions[field.name]}
                    styleDiv={`flex flex-col gap-1`}
                    styleLabel={`font-light text-sm`}
                    styleInput={`rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4`}
                    handleChange={handleChange}
                    />
                );

            })}
            {children}
        </form>
    );
    }
);

CustomForm.displayName = "Form";

CustomForm.propTypes = {
    fields: PropTypes.array,
    onSubmit: PropTypes.func,
    styles: PropTypes.string,
    textButton: PropTypes.string,
    children: PropTypes.node
};

export { CustomForm };
