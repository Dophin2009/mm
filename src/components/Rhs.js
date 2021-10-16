import React, { useState } from "react";

import playIcon from "../assets/play.png";
import Sheet from "./Sheet";
import MathFunction from "../internal/MathFunction";
import Player from "../internal/Player";

function Rhs({ equations }) {
    console.log("Rerender: ", equations);
    const player = new Player();

    const [playing, setPlaying] = useState(equations.len === 0);

    const mfs = equations.map((eq) => ({
        mf: new MathFunction(eq.str, eq.start, eq.end, eq.step),
        duration: eq.duration,
    }));

    const playAudio = async () => {
        setPlaying(true);
        const notes = mfs.flatMap(({ mf, duration }) => mf.notes(duration));
        await player.play(notes, 60, 0);
        setPlaying(false);
    };

    return (
        <div className="relative w-full">
            <PlayButton handleClick={() => playAudio()} />
        </div>
    );
}

function PlayButton({ disabled, handleClick }) {
    let className =
        "bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md absolute left-0 top-0";
    if (disabled) {
        className += " disabled:opacity-50";
    }

    return (
        <button
            className={className}
            onClick={() => handleClick()}
            disabled={disabled}
        >
            <img src={playIcon} alt="Update" className="w-4 h-4" />
        </button>
    );
}

export default Rhs;
