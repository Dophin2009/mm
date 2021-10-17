import Soundfont from "soundfont-player";

class Player {
    constructor() {
        this.ac = new AudioContext();
        this.piano = undefined;
    }

    async init() {
        this.piano = await Soundfont.instrument(
            this.ac,
            "acoustic_grand_piano"
        );
    }

    async play(notes) {
        if (!this.piano) {
            this.init();
        }

        for (const note of notes) {
            this.piano.play(note.midi, this.ac.currentTime + note.start, {
                duration: note.duration,
            });
        }
    }
}

