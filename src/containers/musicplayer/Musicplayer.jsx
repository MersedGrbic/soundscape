import React, { useState, useEffect, useRef } from "react";
import mica from "../../assets/music/alexmica.mp3";
import edward from "../../assets/music/edwardmaya.mp3";
import modjo from "../../assets/music/modjo.mp3";

import {
  VolumeDown,
  VolumeUp,
  VolumeOff,
  VolumeMute,
  Pause,
  FastRewind,
  FastForward,
  PlayCircle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Slider, Typography } from "@mui/material";

const Musicplayer = () => {
  const audioPlayer = useRef();
  const [isPlaying, setIsplaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume]);
  const togglePlay = () => {
    setIsplaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  };
  const VolumeBtns = () => {
    return mute ? (
      <VolumeOff
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMute
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDown
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUp
        sx={{ color: "silver", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    );
  };
  return (
    <section className=" w-full mt-auto ">
      <audio src={mica} ref={audioPlayer} muted={mute} />
      <div className="h-[100px] bg-secondary-bg rounded flex justify-between">
        <div className="border-2 w-[20%]"></div>
        <div className="flex flex-col items-center justify-center  w-[50%]">
          <div className="flex justify-between items-center">
            <SkipPrevious
              sx={{ color: "silver", "&:hover": { color: "white" } }}
            />
            <FastRewind
              sx={{ color: "silver", "&:hover": { color: "white" } }}
            />
            {isPlaying ? (
              <Pause onClick={togglePlay} fontSize="large" />
            ) : (
              <PlayCircle onClick={togglePlay} fontSize="large" />
            )}

            <FastForward
              sx={{ color: "silver", "&:hover": { color: "white" } }}
            />
            <SkipNext sx={{ color: "silver", "&:hover": { color: "white" } }} />
          </div>
          <div className="w-[50%] flex items-center gap-2 player-slider">
            <Typography
              size="small"
              sx={{ color: "silver", "&:hover": { color: "white" } }}
            >
              00:00
            </Typography>
            <Slider
              sx={{ color: "silver", "&:hover": { cursor: "auto" } }}
              size="small"
            />
            <Typography sx={{ color: "silver", "&:hover": { color: "white" } }}>
              00:00
            </Typography>
          </div>
        </div>
        <div className="w-[20%] flex items-center justify-center gap-3">
          {VolumeBtns()}
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={(e, v) => setVolume(v)}
            sx={{
              color: "silver",
              "&:hover": { cursor: "auto" },
              width: "50%",
            }}
            size="small"
          />
        </div>
      </div>
    </section>
  );
};

export { Musicplayer };
