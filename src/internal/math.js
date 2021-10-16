import * as math from 'mathjs';

function verifyExpression(expression) {
    console.log('testing if expression compiles');
    try {
        const val = math.evaluate(expression, {t:0});
        console.log('expression at 0: ' + (val));
        return true;
    } catch (error) {
        console.log('failed to parse expression');
        return false;
    }
}

function evalExpression(expression, time) {
    return math.evaluate(expression, { t:time });
}

export { verifyExpression, evalExpression };