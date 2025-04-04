"use client";
import { XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { TASK_TAG } from "@/app/data/taskTags";

// example format for inputs
// inputs = {
//   title: { label: "Title", type: "text" },
//   tags: { label: "Tags", type: "select", options: Object.values(TASK_TAG) },
// }

const PopupFormProviderComponent = ({
  children,
  formTitle = "Form Title",
  submitBtnLabel = "submit",
  handleOnSubmit = () => {},
  inputs = {
    title: { label: "Title", type: "text" },
    tags: { label: "Tags", type: "select", options: Object.values(TASK_TAG) },
  },
}) => {
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState(null);
  const inputKeys = Object.keys(inputs);

  const handleOnClick = () => {
    setHidden(!hidden);
  };

  const onSubmit = async (data) => {
    data.preventDefault();
    const submitData = {};

    // setHidden(true);
    inputKeys.forEach((key) => {
      submitData[key] = data.target[key].value;
    });
    // console.log(submitData);

    const { success, message } = await handleOnSubmit(submitData);

    if (success) {
      data.target.reset();
      handleOnClick();
    } else {
      setError(message);
    }
  };

  return (
    <div>
      {/* <!-- Trigger Button --> */}
      <div onClick={handleOnClick} id="openContactForm">
        {children}
      </div>
      {/* <!-- Modal --> */}
      <div
        className="fixed z-10 inset-0 overflow-y-auto h-dvh w-dvw"
        style={{ visibility: hidden ? "hidden" : "visible" }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white w-1/2 z-10 max-w-xl p-6 shadow-md rounded-4xl">
            <div className="flex justify-between items-center mb-4">
              {/* <!-- Close Button --> */}
              <h2 className="text-2xl font-bold capitalize">{formTitle}</h2>
              <button
                className="text-gray-700 hover:text-red-500"
                onClick={handleOnClick}
              >
                <XCircleIcon size={25} />
              </button>
            </div>
            <form onSubmit={onSubmit} method="post" id="popup-form">
              {inputKeys.map((key, index) => {
                const input = inputs[key];
                const inputType = input.type ? input.type : "text";
                const defaultValue = input.defaultValue
                  ? input.defaultValue
                  : "";
                if (input.type === "select") {
                  return (
                    <InputComponent
                      key={index}
                      label={input.label}
                      name={key}
                      type={inputType}
                      options={input.options}
                      defaultValue={defaultValue}
                    />
                  );
                }
                return (
                  <InputComponent
                    key={index}
                    label={input.label}
                    name={key}
                    type={inputType}
                    defaultValue={defaultValue}
                  />
                );
              })}
              <div className="w-full justify-end flex">
                <button
                  type="submit"
                  className="bg-gray-1  00 text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-500 hover:text-white border-blue-500 border-2"
                >
                  {submitBtnLabel}
                </button>
              </div>
            </form>
          </div>
          <div
            className="fixed inset-0 z-0 h-dvh w-dvw bg-black/50"
            onClick={handleOnClick}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopupFormProviderComponent;
