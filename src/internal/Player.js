import Soundfont from "soundfont-player";

class Player {
    constructor() {
        this.ac = new AudioContext();
        this.piano = undefined;
    }

    async init() {
        this.piano = await Soundfont.instrument(
            this.ac,
            "acoustic_grand_piano",
            {
                soundfont: "MusyungKite",
            }
        );
    }

    async play(notes, bpm, delay) {
        if (!this.piano) {
            await this.init();
        }

        const sDuration = 15 / bpm;
        const currentTime = this.ac.currentTime;
        for (const { midi, start, duration } of notes) {
            const startTime = currentTime + delay + start * sDuration;
            const durationTime = duration * sDuration;

            this.piano.play(midi, startTime, {
                duration: durationTime,
            });
        }
    }
}

export default Player;
