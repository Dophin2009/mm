import * as math from "mathjs";

class Expr {
    constructor(expr) {
        this.expr = expr;
    }

    eval() {
        try {
            return math.evaluate(this.expr);
        } catch {
            return undefined;
        }
    }
}

export default Expr;
