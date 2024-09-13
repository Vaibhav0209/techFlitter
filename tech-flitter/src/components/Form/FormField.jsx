import React from "react";

const FormField = ({
  label,
  type,
  name,
  placeholder,
  required,
  id,
  isSelect = false,
  isTextArea = false,
  option = [],
  register,
  pattern = "",
  patternMessage = "",
  error,
}) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
        {required ? <span className="text-red-600">*</span> : ""}
      </label>
      {isSelect ? (
        <select
          {...register(name, {
            required: { required },
          })}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {option.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      ) : isTextArea ? (
        <textarea
          type={type}
          {...register(name, {
            required: required,
            pattern: {
              value: pattern,
              message: patternMessage,
            },
          })}
          rows={3}
          id={id}
          className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          {...register(name, {
            required: required,
            pattern: {
              value: pattern,
              message: patternMessage,
            },
          })}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField;
