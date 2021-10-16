import { Fn } from "./math";
import { toMidiSimple } from './notemap';

class IR {
    constructor(fn, start, end, step) {
        this.fn = new Fn(fn);
        this.start = start;
        this.end = end;
        this.step = step;
    }
    
    // generates sheet music from 
    abc(bpm, n16, values) {
        const values = this.values();
        const notes = values.map(([t, v]) => );
        return `K:C
${notes}`;
    }

    // generates whole sequence of notes from start to end with duration step
    soundfont() {
        const values = this.values(this.start, this.end, this.step);
        const notes = values.map(([t, v]) => this.note(t, v, this.step));
        return notes;
    }

    values() {
        const r = [...range(this.start, this.end, this.step)];
        return r.map((t) => [t, this.fn.eval(t)]);
    }

    note(t, v, duration) {
        const midi = toMidiSimple(v);
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
