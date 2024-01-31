import { useState } from "react";
import Button from "../Elements/Button";
import List from "../Elements/List";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="fixed z-10 w-full pb-4 border-b-2 bg-white/80 border-slate-100">
      <div className="container flex items-center justify-between px-4 pt-6">
        <div className="mr-12">
          <a href="#" className="text-3xl font-black font-inter">
            <span className="text-blue-700">SMA</span>N1C
          </a>
        </div>
        <div className="hidden w-full lg:block">
          <List variants={`flex`} />
        </div>
        <div className="hidden ml-12 lg:block">
          <Button classname={"bg-blue-700 hover:bg-blue-500"}>Contact</Button>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsShow(!isShow)}
            className={`px-4 py-2 space-y-2 rounded-lg ${
              !isShow && `outline outline-1 outline-slate-500`
            }`}
          >
            <span
              className={`block w-6 transition duration-300 h-[2px] bg-black ${
                isShow && `rotate-45 translate-y-1`
              }`}
            ></span>
            <span
              className={`block w-6 transition duration-300 h-[2px] bg-black ${
                isShow && `-rotate-45 -translate-y-[6px]`
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div className="w-full lg:hidden">
        {isShow && (
          <>
            {/* {" "} */}
            <List />
            {/* <Button classname={"bg-blue-700 hover:bg-blue-500"}>Contact</Button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
