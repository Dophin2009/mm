import Soundfont from "soundfont-player";

class Player {
    constructor() {
        this.ac = new AudioContext();
        this.piano = undefined;

        this.nodes = [];
    }

    async init() {
        this.piano = await Soundfont.instrument(
            this.ac,
            "acoustic_grand_piano",
            {
                soundfont: "SalC5Light2",
            }
        );
    }

    async play(notes, bpm, delay) {
        if (!this.piano) {
            await this.init();
        }

        await this.stop();

        const sDuration = 15 / bpm;
        const currentTime = this.ac.currentTime;
        for (const { midi, start, duration } of notes) {
            const startTime = currentTime + delay + start * sDuration;
            const durationTime = duration * sDuration;

            const node = this.piano.start(midi, startTime, {
                duration: durationTime,
            });
            this.nodes.push(node);
        }
    }

    async stop() {
        this.piano.stop();
        this.nodes = [];
    }
}

export default Player;
