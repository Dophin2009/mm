import * as math from "mathjs";

function testMath() {
    console.log('testing math');
    let teststring = 'Sin(t)*2 + 34t - 1/sqrt(t) + Log(t)';
    try {
        console.log(math.evaluate(teststring, { t:3 }));
    } catch (error) {
        console.log('failed to evaluate expression: ' + error);
    }
    //console.log(math.parse(teststring).compile().compile().toString());
    //console.log(math.evaluate(teststring, { a: 2 }));
}

export default testMath;