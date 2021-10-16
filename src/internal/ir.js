import { Fn } from "./math";

class IR {
    constructor(fn, start, end, step) {
        this.fn = new Fn(fn);
        this.start = start;
        this.end = end;
        this.step = step;
    }

    abc() {
        const values = this.values();
        const notes = values.map(([t, v]) => );
        return `K:C
${notes}`;
    }

    soundfont() {
        const values = this.values();
        const notes = values.map(([t, v]) => this.note(t, v, this.step));
        return notes;
    }

    values() {
        const r = [...range(this.start, this.end, this.step)];
        return r.map((t) => this.fn.eval(t));
    }

    // NOTE the midi scale goes from 21 to 108
    note(t, v, duration) {
        const LOW_MIDI = 36;
        const HIGH_MIDI = 84;

        const range = HIGH_MIDI - LOW_MIDI + 1;
        const midi = (Math.round(v) % range) + LOW_MIDI;

        return { midi: midi, start: t, duration: duration };
    }
}

function* range(start, end, step) {
    yield start;
    if (start === end) {
        return;
    }
    yield* range(start + step, end, step);
}
