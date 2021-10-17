import React, { useState } from "react";

import playIcon from "../assets/play.png";
import Sheet from "./Sheet";
import Player from "../internal/Player";

function Rhs({ notes }) {
    const player = new Player();

    const [playing, setPlaying] = useState(notes.len === 0);
    const [bpm, setBpm] = useState(100);
    const [title, setTitle] = useState("");

    const playAudio = async () => {
        setPlaying(true);
        await player.play(notes, bpm, 1);
        setPlaying(false);
    };

    return (
        <>
            <div className="relative w-full flex flex-row">
                <PlayButton handleClick={() => playAudio()} />
                <BpmSlider handleChange={(val) => setBpm(val)} />
                <TitleField handleChange={(val) => setTitle(val)} />
            </div>
            <div className="relative w-full flex flex-row">
                <Sheet title={title} bpm={bpm} notes={notes} />
            </div>
        </>
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
                className="h-7 bottom-0 w-12 mx-2 focus:outline-none"
                min={1}
                max={300}
                defaultValue={100}
                onChange={(event) => onChange(event)}
            />
        </div>
    );
}

function TitleField({ handleChange }) {
    const onChange = (event) => handleChange(event.target.value);

    return (
        <div className="text-lg font-bold flex flex-start">
            Title:
            <input
                placeholder="..."
                className="h-7 bottom-0 w-40 mx-2 focus:outline-none"
                onChange={(event) => onChange(event)}
            />
        </div>
    );
}

export default Rhs;
