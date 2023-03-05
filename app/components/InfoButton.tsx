import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const InfoButton = () => {
  return (
    <button className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 py-2 px-3 text-xs text-white transition hover:bg-opacity-20 md:py-2 md:px-4 lg:text-lg">
      <AiOutlineInfoCircle className="mr-1" />
      More Info
    </button>
  );
};

export default InfoButton;
