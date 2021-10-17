import React, { useEffect } from "react";
import { renderSheet } from "../internal/abc";

function Sheet({ title, notes }) {
    useEffect(() => {
        if (notes.len !== 0) {
            renderSheet("paper", "", notes);
        }
    });
    return <div className="w-full flex flex-col items-center" id="paper"></div>;
}

export default Sheet;
