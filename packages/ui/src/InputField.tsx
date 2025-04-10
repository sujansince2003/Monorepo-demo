import React from "react";

interface propType {
  placeholder: string;
}

const InputField = ({ placeholder }: propType) => {
  return (
    <div>
      <input placeholder={placeholder} type="text" />
    </div>
  );
};

export default InputField;
