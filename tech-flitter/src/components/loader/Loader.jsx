import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
    </div>
  );
};

export default Loader;
