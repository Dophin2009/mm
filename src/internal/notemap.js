import React from 'react';

// NOTE the midi scale goes from 21 to 108
const LOW_MIDI = 36;
const HIGH_MIDI = 84;
const RANGE = HIGH_MIDI - LOW_MIDI + 1;

function toMidiSimple(val) {
    return (Math.round(val) % RANGE) + LOW_MIDI;
}

export { toMidiSimple };