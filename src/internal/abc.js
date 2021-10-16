
// notes: midi, start (index of 16th notes), duration (how many 16th notes it lasts)

const getLetter = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
function midiToLetter(midi) {
    let add = "";
    while (midi < 60) {
        midi += 12;
        add += ",";
    }
    while (midi >= 72) {
        midi -= 12;
        add += "'";
    }
    return getLetter[midi-60] += add;
}

export function generateSheet(notes) {
    const metadata =
    "X: 1\n" +
    "M:4/4\n" +
    "L:1/4\n" +
    "Q:1/4=90\n" +
    "K:G\n";

    
}

export function generateTestSheet() {
    return "X: 1\n" +
    "T:Happy Birthday\n" +
    "M:4/4\n" +
    "L:1/4\n" +
    "Q:1/4=90\n" +
    "K:G\n" +
    "D/2>D/2| E/3 D G| F2 D/2>D/2| E D A| G2 D/2>D/2|\n" +
    "d B G| F E c/2>c/2| B G A| G2|D/2>E/2 | G A B | C D E | F G A | B C E|]";
}

export function generateTestSheet2() {
    const notes = [
        { midi: 60, start: 4, duration: 1 },
        { midi: 55, start: 8, duration: 2 },
        { midi: 60, start: 12, duration: 4 },
        { midi: 64, start: 16, duration: 8 },
        { midi: 84, start: 17, duration: 1 },
        { midi: 79, start: 18, duration: 1 },
        { midi: 76, start: 19, duration: 1 },
        { midi: 72, start: 20, duration: 1 },
    ];

    return generateSheet(notes);
}