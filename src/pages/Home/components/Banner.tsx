import React, { FC, useState, useEffect, useContext } from "react";
import { TestContext } from "../../../contexts/TestContext";

const Banner: React.FC<{}> = ({ }) => {
  const [show, setShow] = useState<boolean>(false);
  const { setIsModalShow } = useContext(TestContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      clearTimeout(timer);
    }, 10000);
  }, []);

  const handleClickNew = () => {
    setShow(false);
    setIsModalShow(true)
  }
  return (
    <div className={`relative w-full ${show ? "block" : "hidden"}`}>
      <div className="w-full">
        <img src="/images/banner.png" className="w-full rounded-xl" alt="banner png" />
      </div>
      <div className="absolute z-10 top-0 left-0 flex justify-center items-center w-full h-full">
        <div>
          <h1 className="mb-0 text-white text-[48px] font-extrabold">
            New features available!
          </h1>
          <p className="mt-3 mb-7 text-[#e9eff2] text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button
            className="py-3 px-8 bg-[#68c0d2] rounded-2xl text-[16px] text-white font-medium"
            onClick={() => handleClickNew()}
          >
            View New Features
          </button>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute top-4 right-6 z-20 cursor-pointer"
        onClick={() => setShow(false)}
      >
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7 7l10 10M7 17L17 7"
        />
      </svg>
    </div>
  );
};

export default Banner;
