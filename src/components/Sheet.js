import React, { useEffect } from "react";
import { renderSheet } from "../internal/abc";

function Sheet({ title, bpm, notes }) {
    let titleStr = title;
    if (title === "") {
        titleStr = "Untitled Masterpiece";
    }
    useEffect(() => {
        if (notes.len !== 0) {
            renderSheet("paper", titleStr, bpm, notes);
        }
    });
    return <div className="w-full flex flex-col items-center" id="paper"></div>;
}

export default Sheet;
