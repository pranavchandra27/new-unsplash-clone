import React from "react";

const Spinner = () => {
  return (
    <div className="flex">
      <div
        className="animate-spin inline-block w-7 h-7 border-4 rounded-full"
        style={{ borderRightColor: "gray" }}
      ></div>
    </div>
  );
};

export default Spinner;
