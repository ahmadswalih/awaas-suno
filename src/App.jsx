import React, { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import MusicList from "./components/MusicList";
import tracks from "./data/tracks.json";
import logo from "./assets/logo.png";

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=" overflow-x-hidden min-h-screen absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex flex-col mt-10 overflow-hidden items-center justify-center    ">
        {/* <p className="text-black text-5xl bg-yellow-200 p-2 rounded-md mt-10">
          Avaas Sunoo
        </p> */}
        <img
          className="bg-white rounded-full p-2 items-center "
          src={logo}
          alt=""
        />
        <p className="mt-10 text-white text-2xl w-[26rem] text-center">
          Curated list of Malayalam Songs for Wedding Functions.
        </p>
        <p className="text-white items-center text-sm bg-neutral-800 p-2 rounded-lg mt-10">
          Created by{" "}
          <span className="underline text-blue-500 cursor-pointer">
            {" "}
            <a href="https://www.ahmadswalih.com/" target="_blank">
              Ahmad Swalih
            </a>
          </span>
        </p>
        <div className=" flex justify-center mt-4 !overflow-auto">
          <div className="mb-14">
            <MusicList
              onTrackSelect={setSelectedTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              selectedTrack={selectedTrack}
              tracks={tracks}
            />
            <MusicPlayer
              selectedTrack={selectedTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              tracks={tracks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
