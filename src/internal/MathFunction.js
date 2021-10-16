import { toMidiSimple } from "./notemap";
import Fn from "./Fn";

class MathFunction {
    constructor(fn, start, end, step) {
        this.fn = new Fn(fn);
        this.start = start;
        this.end = end;
        this.step = step;
    }

    values() {
        const r = [...range(this.start, this.end, this.step)];
        return r.map((t) => [t, this.fn.eval(t)]);
    }

    // generates sheet music from
    // abc(bpm, n16, values) {}

    // Generates whole sequence of notes from start to end with duration step.
    notes(duration) {
        const values = this.values(this.start, this.end, this.step);
        return values.map(([, v], i) =>
            this.valToNote(v, i * duration, duration)
        );
    }

    valToNote(v, start, duration) {
        const midi = toMidiSimple(v);
        return Note(midi, start, duration);
    }
}

function Note(midi, start, duration) {
    return { midi: midi, start: start, duration: duration };
}

function* range(start, end, step) {
    yield start;
    if (start === end) {
        return;
    }
    yield* range(start + step, end, step);
}
