import Soundfont from 'soundfont-player';

function playNotes(notes) {
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(function (piano) {
        for (let i = 0; i < notes.length; i++) {
            piano.play(notes[i].midi, ac.currentTime + notes[i].start, {duration: notes[i].duration });
        }
    });
}