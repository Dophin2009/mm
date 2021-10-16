import React from 'react';
import playIcon from '../assets/play.png';
import abcjs from 'abcjs';
import { generateSheet, generateTestSheet } from '../internal/abc';

function Sheet() {
    return (
        <div>
            <button className="bg-red-100" onClick={() => abcjs.renderAbc("paper", generateTestSheet())}>
                render abc
            </button>
            <div className="w-full bg-green-100 flex flex-col items-center" id="paper"></div>
        </div>
        
    )
}

export default Sheet;
