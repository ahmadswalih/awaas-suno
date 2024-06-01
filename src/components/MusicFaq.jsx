import React, { useState } from "react";
import { PiEyeClosedFill } from "react-icons/pi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MusicFaq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        How We Get the Songs?
      </button>

      <Popup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modal
        closeOnDocumentClick
        contentStyle={{
          background: "#1a1a26",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          border: "1px solid  #4a4a70",
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className=" text-white ">
          <button
            className="absolute top-0 right-0 mt-2  mr-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            onClick={() => setIsOpen(false)}
          >
            <PiEyeClosedFill />
          </button>
          <div className="text-xl font-HagridRegular font-bold mb-4 mt-2 ">
            How We Get the Songs?
          </div>
          <p>
            We don't store any type of music in our system. Each and every track
            is embedded from YouTube, and we disable the video format of the
            video, so in the background, it's running the YouTube embedded
            video. Therefore, we don't store any kind of songs.
          </p>
          <hr className="my-4" />
          <div className="text-xl font-HagridRegular font-bold mb-4">
            Why this doesn't have ads?
          </div>
          <p>
            YouTube doesn't push ads to their embedded videos, so we are
            utilizing that to play the song without getting ads.
          </p>
        </div>
      </Popup>
    </div>
  );
};

export default MusicFaq;
