import { random } from "mathjs";
import Soundfont from "soundfont-player";
import { basicMap } from './notemap';

function playSound() {
    console.log('attempting to play sound 1');
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
        // console.log('in the then');
        // piano.play('C4');
        // piano.play('G4');
        // piano.play('D5');
        // piano.play('E5');
        // piano.play('B5');
        // piano.play(69);

        let notes = [
            ['C4', 'G4', 'D5', 'E5', 'B5'],
            ['F4', 'A4', 'D5', 'G5'],
            ['A3', 'C4', 'D4', 'G4', 'B4'],
            ['G3', 'D4', 'G4', 'C5', 'D5'],
            ['F3', 'G3', 'C4'],
            ['E4']
        ]
        for (let i = 0; i < notes.length; i++) {
            const fac = 2;
            for (let j = 0; j < notes[i].length; j++) {
                piano.play(notes[i][j], ac.currentTime+fac*i);
            }
        }
    });
}

function playSound2() {
    console.log('attempting to play sound 2');
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
        piano.play(84);
    });
}

function playRandom(len) {
    console.log('attempting to play random for len seconds');
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
        for (let i = 0; i < len; i += 0.25) {
            let rval = Math.random()*100;
            let mval = basicMap(rval);
            piano.play(mval, ac.currentTime+i);
        }
    });
}

export { playSound, playSound2, playRandom } ;