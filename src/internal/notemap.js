
// NOTE the midi scale goes from 21 to 108
const lowMidi = 36, highMidi = 84;
function basicMap(val) {
    const map = new Map();
    const range = highMidi-lowMidi+1;
    val = Math.round(val)%range + lowMidi;
    return val;
}

export { basicMap };