import React from "react";
import { isDOMComponent } from "react-dom/test-utils";

// NOTE the midi scale goes from 21 to 108
const LOW_MIDI = 36;
const HIGH_MIDI = 84;
const RANGE = HIGH_MIDI - LOW_MIDI + 1;

function toMidiSimple(val) {
    return (Math.round(val) % RANGE) + LOW_MIDI + 24;
}

const isWhite = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
function toMidiWhiteKeys(val) {
    const WRANGE = 7*4+1;
    let offset = Math.round(val)%RANGE;
    let idx = 60;
    while (offset >= 0) {
        idx++;
        if (isWhite[idx%12]===0) idx++;
        offset--;
    }
    while (offset < 0) {
        idx--;
        if (isWhite[idx%12]===0) idx--;
        offset++;
    }
    return idx;
}


export { toMidiSimple, toMidiWhiteKeys };
