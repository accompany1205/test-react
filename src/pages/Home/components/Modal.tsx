import React, { FC, useState, useEffect, useContext } from "react";
import { TestContext } from "../../../contexts/TestContext";
import "./style.css";

const Modal: React.FC<{}> = ({}) => {
  const { isModalShow, setIsModalShow } = useContext(TestContext);
  const [text, setText] = useState<string>("");

  const handleClickSave = () => {
    if (text.length === 0) {
      return;
    }
    // save function
    setIsModalShow(false);
  };

  if (!isModalShow) {
    return <></>;
  }
  return (
    <div className="fixed top-0 z-50 bg-[#d8dde059] w-full min-h-screen flex items-center justify-center">
      <div className="bg-white w-[580px] rounded-2xl shadow-xl p-7">
        <h3 className="m-0 text-[32px] font-semibold text-center">
          New Features Available{" "}
        </h3>
        <p className="text-[16px] my-4">
          The name of your workspace will be visible to your customers. For us,
          it is "SAAS First". You will NOT be able to change this later.
        </p>
        <div className="flex justify-start items-center mb-2">
          <p className="m-0 text-[16px] font-semibold mr-2">
            New UI/UX Designer
          </p>
          <div className="relative inline-block tooltip cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#909da4"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.01 8H11a1 1 0 0 0-.117 1.993L11 12v4.99c0 .52.394.95.9 1.004l.11.006h.49a1 1 0 0 0 .596-1.803L13 16.134V11.01c0-.52-.394-.95-.9-1.004zM12 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                />
              </g>
            </svg>
            <p className="tooltiptext min-w-[120px] invisible bg-white rounded-xl shadow-lg text-black text-center p-3 absolute left-[-500%] top-[-220%]">
              tooltip 1
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center mb-8">
          <p className="m-0 text-[16px] font-semibold mr-2">New FE Developer</p>
          <div className="relative inline-block tooltip cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#909da4"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.01 8H11a1 1 0 0 0-.117 1.993L11 12v4.99c0 .52.394.95.9 1.004l.11.006h.49a1 1 0 0 0 .596-1.803L13 16.134V11.01c0-.52-.394-.95-.9-1.004zM12 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                />
              </g>
            </svg>
            <p className="tooltiptext min-w-[120px] invisible bg-white rounded-xl shadow-lg text-black text-center p-3 absolute left-[-500%] top-[-220%]">
              tooltip 2
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center mt-2 mb-2">
          <p className="m-0 text-[16px] font-semibold mr-2">
            Request New Features
          </p>
          <div className="relative inline-block tooltip cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#909da4"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.01 8H11a1 1 0 0 0-.117 1.993L11 12v4.99c0 .52.394.95.9 1.004l.11.006h.49a1 1 0 0 0 .596-1.803L13 16.134V11.01c0-.52-.394-.95-.9-1.004zM12 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                />
              </g>
            </svg>
            <p className="tooltiptext min-w-[120px] invisible bg-white rounded-xl shadow-lg text-black text-center p-3 absolute left-[-500%] top-[-220%]">
              tooltip 3
            </p>
          </div>
        </div>
        <input
          type="text"
          className="py-2 px-3 w-full outline-none text-[16px] rounded-lg border-[1px] border-gray-400"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g. mobile app developer"
        />
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <button
              className="w-full py-3 bg-[#e9eff2] text-black font-semibold rounded-xl"
              onClick={() => setIsModalShow(false)}
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              className={
                text.length > 0
                  ? "w-full py-3 bg-[#3d22cf] text-white font-semibold rounded-xl"
                  : "w-full py-3 bg-[#e9eff2] text-black font-semibold rounded-lg cursor-not-allowed"
              }
              onClick={() => handleClickSave()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
