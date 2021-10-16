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

    async play(notes, bpm) {
        if (!this.piano) {
            this.init();
        }

        const sDuration = 15 / bpm;
        for (const { midi, start, duration } of notes) {
            const startTime = this.ac.currentTime + start * sDuration;
            const durationTime = duration * sDuration;

            this.piano.play(midi, startTime, {
                duration: durationTime,
            });
        }
    }
}

export default Player;
