import React from "react";

const ErrorInputMessageComponent = ({ message }) => {
  return (
    <>
      {message && (
        <span className="text-red-500 pt-2 px-1 rounded-lg text-sm font-medium">
          {message}
        </span>
      )}
    </>
  );
};

export default ErrorInputMessageComponent;
