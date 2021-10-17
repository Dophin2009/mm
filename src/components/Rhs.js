import React, { useState } from "react";

import playIcon from "../assets/play.png";
import Sheet from "./Sheet";
import Player from "../internal/Player";

function Rhs({ notes }) {
    const player = new Player();

    const [playing, setPlaying] = useState(notes.len === 0);
    const [bpm, setBpm] = useState(160);

    const playAudio = async () => {
        setPlaying(true);
        await player.play(notes, bpm, 1);
        setPlaying(false);
    };

    return (
        <div className="relative w-full flex flex-row">
            <PlayButton handleClick={() => playAudio()} />
            <BpmSlider handleChange={(val) => setBpm(val)} />
        </div>
    );
}

function PlayButton({ disabled, handleClick }) {
    let className =
        "bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md left-0 top-0";
    if (disabled) {
        className += " disabled:opacity-50";
    }

    return (
        <div className="text-lg font-bold flex flex-start mr-3">
            <button
                className={className}
                onClick={() => handleClick()}
                disabled={disabled}
            >
                <img src={playIcon} alt="Update" className="w-4 h-4" />
            </button>
        </div>
    );
}

function BpmSlider({ handleChange }) {
    const onChange = (event) => handleChange(event.target.value);

    return (
        <div className="text-lg font-bold flex flex-start">
            BPM:
            <input
                type="number"
                className="h-7 bottom-0 w-10 mx-2 focus:outline-none"
                min={1}
                max={300}
                defaultValue={160}
                onChange={(event) => onChange(event)}
            />
        </div>
    );
}

export default Rhs;
