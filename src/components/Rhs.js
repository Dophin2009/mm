import React from "react";
import playIcon from "../assets/play.png";
import abcjs from "abcjs";
import { generateSheet, generateTestSheet } from "../internal/abc";
import Sheet from "./Sheet";

function Rhs() {
    return (
        <div className="relative w-full">
            <button className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md absolute left-0 top-0">
                <img src={playIcon} alt="Update" className="w-4 h-4" />
            </button>
        </div>
    );
}

export default Rhs;
