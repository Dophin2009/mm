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

export function generateSheet(title, notes) {
    let data =
        "T: " + title + "\n" + "M:4/4\n" + "L:1/4\n" + "Q:1/4=90\n" + "K:C\n";

    let midiMap = new Map();
    for (const note of notes) {
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
    for (const key of keys) {
        if (key >= li + 16) {
            data += cur + " | ";
            cur = "";
            li += 16;
            if (li % 64 === 0) data += "\n";
        }
        cur += "[" + midiMap.get(key) + "] ";
    }
    data += cur + "\n";

    console.log(data);
    return data;
}

export function renderSheet(id, title, notes) {
    abcjs.renderAbc(id, generateSheet(title, notes));
}

