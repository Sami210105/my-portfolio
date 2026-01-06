import { useRef, useState } from 'react';
import RetroWindow from '../RetroWindow';
import musicFile from '../../assets/karma.mp3';
import cover from '../../assets/cover.jpg';

export default function MusicBox() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleRepeat = () => {
    setIsRepeat(prev => !prev);
    if (audioRef.current) {
      audioRef.current.loop = !isRepeat;
    }
  };

  return (
    <RetroWindow title="music-player.exe">
      <div className="flex flex-col items-center gap-4">

        {/* VINYL DISC */}
        <div
          className={`relative w-40 h-40 rounded-full 
          bg-gradient-to-br from-black to-[#222]
          flex items-center justify-center
          ${isPlaying ? 'spin' : ''}`}
        >
          {/* inner ring */}
          <div className="absolute w-28 h-28 rounded-full border border-white/10" />

          {/* album cover */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#caa18d] z-10">
            <img
              src={cover}
              alt="album cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* center pin */}
          <div className="absolute w-2 h-2 bg-black rounded-full z-20" />
        </div>

        {/* SONG INFO */}
        <div className="text-center text-sm">
          Fav song playing...
          <div className="text-xs opacity-70">
            Karma – Taylor Swift
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex gap-2 flex-wrap justify-center">

          <button
            onClick={togglePlay}
            className="border-2 border-black px-3 py-1 bg-[#caa18d]
            active:translate-x-[1px] active:translate-y-[1px]"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>

          <button
            onClick={stopMusic}
            className="border-2 border-black px-3 py-1 bg-[#caa18d]
            active:translate-x-[1px] active:translate-y-[1px]"
          >
            Stop
          </button>

          <button
            onClick={toggleRepeat}
            className={`border-2 border-black px-3 py-1
            active:translate-x-[1px] active:translate-y-[1px]
            ${isRepeat ? 'bg-[#9b6b53] text-white' : 'bg-[#caa18d]'}`}
          >
            Repeat
          </button>

        </div>

        {/* AUDIO */}
        <audio ref={audioRef} src={musicFile} />
      </div>
    </RetroWindow>
  );
}
