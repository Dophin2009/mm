import abcjs from 'abcjs';
// notes: midi, start (index of 16th notes), duration (how many 16th notes it lasts)

const getLetter = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
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

    //console.log(duration + " " + durationToLength.get(duration));
    return getLetter[midi-60] + add + durationToLength.get(duration);
}

export function generateSheet(notes) {
    let data =
    "T: Random Notes\n" +
    "M:4/4\n" +
    "L:1/4\n" +
    "Q:1/4=90\n" +
    "K:G\n";

    let midiMap = new Map();
    for (const note of notes) {
        if (midiMap.get(note.start)===undefined) midiMap.set(note.start, "");
        midiMap.set(note.start, midiMap.get(note.start)+midiToLetter(note.midi, note.duration));
        console.log(note.start + "-->" + midiMap.get(note.start));
    }
    let keys = Array.from(midiMap.keys());
    keys.sort((a, b) => a-b);
    let li = 0;
    let cur = "";
    for (const key of keys) {
        if (key >= li+16) {
            data += cur + " | ";
            cur = "";
            li += 16;
            if (li%64 === 0) data += "\n";
        }
        cur += "[" + midiMap.get(key) + "] ";
    }
    data += cur + "\n";
    console.log(data);

    //console.log(keys);
    return data;
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

export function generateTestSheet3() {
    return "X: 1\n" + 
    "T: Cooley's\n" + 
    "M: 4/4\n" + 
    "L: 1/8\n" + 
    "K: Emin\n" + 
    `|:D2|"Em"EBBA B2 EB|\
        ~B2 AB dBAG|\
        "D"FDAD BDAD|\
        FDAD dAFD|
    "Em"EBBA B2 EB|\
        B2 AB defg|\
        "D"afe^c dBAF|\
        "Em"DEFD E2:|
    |:gf|"Em"eB B2 efge|\
        eB B2 gedB|\
        "D"A2 FA DAFA|\
        A2 FA defg|
    "Em"eB B2 eBgB|\
        eB B2 defg|\
        "D"afe^c dBAF|\
        "Em"DEFD E2:|`;
}

export function generateTestSheet2() {
    const notes = [
        { midi: 60, start: 4, duration: 1 },
        { midi: 55, start: 8, duration: 2 },
        { midi: 64, start: 16, duration: 8 },
        { midi: 60, start: 12, duration: 4 },
        
        { midi: 60, start: 17, duration: 1 },
        { midi: 84, start: 17, duration: 1 },
        { midi: 79, start: 18, duration: 1 },
        { midi: 76, start: 19, duration: 1 },
        { midi: 72, start: 20, duration: 1 },
    ];

    //console.log(durationToLength);
    return generateSheet(notes);
}

let visualObj = null;
export function renderSheet() {
    visualObj = abcjs.renderAbc("paper", generateTestSheet3());
}

export function testAudio() {
    var myContext = new AudioContext();
    var synth = new abcjs.synth.CreateSynth();

    //var synthControl = new abcjs.synth.SynthController();
	//var sequencer = ABCJS.synth.SynthSequence();
    //sequencer.addTrack();
    //sequencer.setInstrument(0, 25);
    //sequencer.appendNote({ trackNumber: 0, pitch: 60, durationInMeasures: 1, volume: 80 });



    synth.init({
        audioContext: myContext,
        visualObj: visualObj[0],
        millisecondsPerMeasure: 2000,
        
        // options: {
        //     soundFontUrl: '../assets/SalC5Light2.sf2',
        //     soundFontUrl: 32,
        //     programOffsets: 1000,
        // }
    }).then(function (results) {
        synth.prime
    }).then(() => {
        synth.prime(() => {
            console.log('in the prime');
        });
    }).then(() => {
        synth.start();
    })
}