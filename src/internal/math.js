import * as math from "mathjs";

export function compileFn(fn) {
    return Fn(fn);
}

class Fn {
    constructor(fn) {
        this.compiled = math.compile(fn);
    }

    verify() {
        try {
            this.eval(0);
            return true;
        } catch (error) {
            return false;
        }
    }

    eval(t) {
        return this.compiled.evaluate({ t: t });
    }

    evalRange(r) {
        return r.map((t) => this.compiled.evaluate(t));
    }
}
