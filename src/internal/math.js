import * as math from "mathjs";

export function verifyFn(fn) {
    try {
        math.evaluate(fn, { t: 0 });
        return true;
    } catch (error) {
        return false;
    }
}

export function compileFn(fn) {
    return Fn(fn);
}

class Fn {
    constructor(fn) {
        this.compiled = math.compile(fn);
    }

    eval(t) {
        return this.compiled.evaluate({ t: t });
    }

    evalRange(r) {
        return r.map((t) => this.compiled.evaluate(t));
    }

}
