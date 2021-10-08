import React, { FC } from "react";

interface DropdownProps {
  urls: {
    regular: string;
    full: string;
    small: string;
    raw: string;
  };
  dimensions: {
    width: number;
    height: number;
  };
}

const Dropdown: FC<DropdownProps> = ({ urls, dimensions }) => {
  return (
    <div className="dropdown w-48 h-auto rounded bg-gray-900 shadow-lg cursor-default">
      <div className="arrow bg-gray-900"></div>
      <div className="text-right p-2 border-b border-gray-50 border-opacity-50">
        <a href={urls.small} target="_blank">
          <p className="cursor-pointer text-sm text-white font-medium py-1 hover:opacity-75 transition-colors duration-300 ease-in">
            Small
          </p>
        </a>
        <a href={urls.regular} target="_blank">
          <p className="cursor-pointer text-sm text-white font-medium py-1 hover:opacity-75 transition-colors duration-300 ease-in">
            Medium
          </p>
        </a>
        <a href={urls.full} target="_blank">
          <p className="cursor-pointer text-sm text-white font-medium py-1 hover:opacity-75 transition-colors duration-300 ease-in">
            Large
          </p>
        </a>
      </div>
      <div className="text-right p-2">
        <a href={urls.raw} target="_blank">
          <p className="cursor-pointer text-sm text-white font-medium py-1 hover:opacity-75 transition-colors duration-300 ease-in">
            Original Size{" "}
            <span className="text-gray-300 opacity-75">
              ({dimensions.width}x{dimensions.height})
            </span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
