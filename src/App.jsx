import React, { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import MusicList from "./components/MusicList";
import tracks from "./data/tracks.json";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar";
import MusicFaq from "./components/MusicFaq";

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=" overflow-x-hidden min-h-screen absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex flex-col mt-10 overflow-hidden items-center justify-center    ">
        <Navbar />

        <p className="mt-14 md:mt-24 text-white font-HagridRegular text-lg  md:text-2xl w-[26rem]  text-center">
          Curated list of{" "}
          <span className="text-yellow-500 underline"> Malayalam Songs </span>{" "}
          for Wedding Functions.
        </p>
        <MusicFaq />

        <div className=" flex justify-center mt-4 !overflow-auto">
          <div className="mb-14">
            <MusicList
              onTrackSelect={setSelectedTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              selectedTrack={selectedTrack}
              tracks={tracks}
            />
            {selectedTrack && (
              <MusicPlayer
                setSelectedTrack={setSelectedTrack}
                selectedTrack={selectedTrack}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                tracks={tracks}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
