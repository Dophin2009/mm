import abcjs from "abcjs";
// notes: midi, start (index of 16th notes), duration (how many 16th notes it lasts)

const getLetter = [
    "C",
    "^C",
    "D",
    "^D",
    "E",
    "F",
    "^F",
    "G",
    "^G",
    "A",
    "^A",
    "B",
];
const durationToLength = new Map([
    [1, "/4"],
    [2, "/2"],
    [4, ""],
    [8, "2"],
    [16, "4"],
]);
function midiToLetter(midi, duration) {
    let add = "";
    while (midi < 60) {
        midi += 12;
        add += ",";
    }
    while (midi >= 72) {
        midi -= 12;
        add += "'";
    }

    return getLetter[midi - 60] + add + durationToLength.get(duration);
}

export function generateSheet(title, bpm, notes) {
    let data =
        "T: " +
        title +
        "\n" +
        "M:4/4\n" +
        "L:1/4\n" +
        "Q:1/4=" +
        bpm +
        "\n" +
        "K:C\n";

    let midiMap = new Map();
    let has16 = false;
    for (const note of notes) {
        if (note.duration === 1) has16 = true;
        if (midiMap.get(note.start) === undefined) midiMap.set(note.start, "");
        midiMap.set(
            note.start,
            midiMap.get(note.start) + midiToLetter(note.midi, note.duration)
        );
    }
    let keys = Array.from(midiMap.keys());
    keys.sort((a, b) => a - b);
    let li = 0;
    let cur = "";
    const mlen = has16 === true ? 32 : 64;
    for (const key of keys) {
        if (key >= li + 16) {
            data += cur + " | ";
            cur = "";
            li += 16;
            if (li % mlen === 0) data += "\n";
        }
        cur += "[" + midiMap.get(key) + "] ";
    }
    data += cur + "|\n";

    return data;
}

export function renderSheet(id, title, bpm, notes) {
    abcjs.renderAbc(id, generateSheet(title, bpm, notes));
}
