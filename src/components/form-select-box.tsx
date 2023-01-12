import React from "react";
import Select from "react-select";

type formSelectProp = {
  label?: string;
  name: string;
  value: any;
  options: any;
  placeholder: string;
  isLoading?: boolean;
  isInvalid?: boolean;
  validationMessage?: boolean;
  onChange: any;
};

function FormSelectBox({
  label,
  name,
  value,
  options = [],
  placeholder,
  isLoading,
  isInvalid,
  validationMessage,
  onChange,
  ...rest
}: formSelectProp) {
  return (
    <div>
      {label && (
        <div>
          <label>{label}</label>
        </div>
      )}

      <Select
        //   styles={customStyles}
        name={name}
        value={value}
        options={options}
        isLoading={isLoading}
        classNamePrefix="form-select-box"
        placeholder={placeholder}
        // isInvalid={isInvalid}
        onChange={onChange}
        {...rest}
      />

      {isInvalid && validationMessage && (
        <div>
          {/* <ErrorIcon size={14} /> */}
          <p>{validationMessage}</p>
        </div>
      )}
    </div>
  );
}

export default FormSelectBox;
