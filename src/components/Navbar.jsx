import React, { useState } from "react";
import { PiEyeClosedFill } from "react-icons/pi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:w-[50rem] flex-col md:flex-row  text-white items-center justify-between">
      <div className="mb-4 text-3xl font-HagridRegular">
        <p>Awaas Sunoooo</p>
      </div>
      <div className="flex flex-row">
        <Popup
          trigger={
            <p className="bg-blue-950 p-2  rounded-md cursor-pointer">
              Contribute!
            </p>
          }
          modal
          nested
          closeOnDocumentClick={true}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          contentStyle={{
            background: "#1a1a26",
            padding: "20px",
            borderRadius: "18px",
            maxWidth: "400px",
            width: "90%",
            boxShadow: "0px 0px 5px #1a1a26",
            border: "1px solid  #4a4a70",
          }}
        >
          {(close) => (
            <div className="text-white  ">
              <div className=" text-lg md:text-xl font-bold mb-4 mt-10">
                Have a new track in mind or have a new feature request?
              </div>

              <div className="flex  flex-col">
                <a
                  className="text-white"
                  href="https://github.com/ahmadswalih/avaas"
                  target="_blank"
                >
                  <button className="mb-2 font-bold rounded-md bg-gray-800 hover:bg-gray-700 p-2">
                    GitHub
                    <p className="text-sm font-normal">
                      [ If you are a nerd, then this is the best option to
                      contribute.]
                    </p>
                  </button>
                </a>
                <a
                  href="https://t.me/Swalih_ahmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <button className="mb-2 font-bold rounded-md bg-gray-800 hover:bg-gray-700 p-2">
                    Telegram
                    <p className="text-sm font-normal">
                      [ Shoot your track link that has to be added to the
                      platform.]
                    </p>
                  </button>
                </a>
                <hr className="mb-4 mt-4" />
                <p className="text-sm  text-center text-yellow-500 p-2 ">
                  If you don't use above two , then shoot it here!!
                </p>
                <div className="flex items-start justify-center w-full ">
                  <a
                    href="http://wa.me/+917736030582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-center mb-2 w-1/2 rounded-md bg-gray-800 hover:bg-gray-700 p-2"
                  >
                    <button className="">WhatsApp</button>
                  </a>
                  <a
                    href="http://instagram.com/swalih_ahmd_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mb-2 w-1/2 ml-4 rounded-md text-center bg-gray-800 hover:bg-gray-700 p-2"
                  >
                    <button className="">Instagram</button>
                  </a>
                </div>
              </div>
              <button
                className="absolute top-0 right-0 mt-2  mr-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                onClick={close}
              >
                <PiEyeClosedFill />
              </button>
            </div>
          )}
        </Popup>
        <a
          href="https://buymeacoffee.com/ahmadswalih"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="ml-4 bg-[#FFDD00] text-black p-2  rounded-md ">
            🍕 Buy me a Pizza!
          </p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
