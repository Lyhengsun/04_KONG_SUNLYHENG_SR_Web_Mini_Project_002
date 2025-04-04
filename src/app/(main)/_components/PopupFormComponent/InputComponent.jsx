import React from "react";

const InputComponent = ({
  label = "None",
  name = "",
  type = "text",
  placeholder = "",
  defaultValue = "",
  options = [],
  value = null,
}) => {
  if (type === "datetime-local" && defaultValue === "") {
    const currentDate = new Date();
    defaultValue = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}T${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    // console.log("default date: ", defaultValue);
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-lg font-bold capitalize">
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          id={name}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          defaultValue={options[0]}
        >
          {options.map((optionValue, index) => (
            <option value={optionValue} key={index}>
              {optionValue}
            </option>
          ))}
        </select>
      ) : value ? (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default InputComponent;
