import React from 'react';
import playIcon from '../assets/play.png';
import abcjs from 'abcjs';
import { generateSheet, generateTestSheet, generateTestSheet2, renderSheet, testAudio } from '../internal/abc';

function Sheet() {
    return (
        <div>
            <button className="bg-red-100" onClick={renderSheet}>
                render abc
            </button>
            <button className="bg-blue-100" onClick={testAudio}>
                test audio
            </button>
            <div className="w-full bg-green-100 flex flex-col items-center" id="paper"></div>
        </div>
        
    )
}

export default Sheet;
