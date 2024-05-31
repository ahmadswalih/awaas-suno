import { FaPause, FaPlay } from "react-icons/fa";

const MusicList = ({
  onTrackSelect,
  isPlaying,
  setIsPlaying,
  selectedTrack,
  tracks,
}) => {
  const handlePlayPauseClick = () => {
    if (selectedTrack) {
      setIsPlaying(!isPlaying); // Toggle play/pause
    } else {
      // No track selected, play the first track
      onTrackSelect(tracks[0]);
      setIsPlaying(true);
    }
  };
  return (
    <div className="bg-dark-700 text-white p-6 md:w-full w-fit  rounded-lg">
      <div className="flex items-center w-full p-4 justify-between mb-4">
        <button
          className="bg-green-500 rounded-full  p-3"
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="flex space-x-4">
          <button className="w-6 h-6 rounded-full bg-gray-500"></button>
          <button className="w-6 h-6 rounded-full bg-gray-500"></button>
          <button className="w-6 h-6 rounded-full bg-gray-500"></button>
        </div>
      </div>
      <div className="!overflow-auto pb-32 ">
        <table className="w-full text-left">
          <thead className="md:text-2xl text-xl border-b border-gray-700">
            <tr>
              <th className="p-4 hidden md:table-cell">#</th>
              <th className="p-4">Title</th>
              <th className="p-4  ">Singers</th>
              <th className="p-4 hidden md:table-cell  ">Language</th>
              <th className="p-4 hidden md:table-cell">Duration</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr
                key={track.id}
                className={`border-b border-gray-700 hover:bg-gray-700 hover:cursor-pointer" 
                  `}
                onClick={() => onTrackSelect(track)}
              >
                <td className="p-4 hidden md:table-cell ">{track.id}</td>
                <td className="p-4 hover:underline">{track.title}</td>
                <td className="p-4 hover:underline ">{track.singers}</td>
                <td className="p-4 hidden md:table-cell ">{track.language}</td>
                <td className="p-4 hidden md:table-cell ">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MusicList;
