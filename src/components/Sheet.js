import React from 'react';
import playIcon from '../assets/play.png';
import abcjs from 'abcjs';

function Sheet() {
    return (
        <div className="relative w-full">
            <button className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md absolute left-0 top-0">
                <img src={playIcon} alt="Update" className="w-4 h-4" />
            </button>

            <button className="h-20 w-10 bg-red-100" onClick={() => abcjs.renderAbc("paper", "X:1\nT:Chords\nM:2/4\nK:C\n[CEGc] [C2G2][CE][DF] | [D2F2][EG][FA] [A4d4]|[CEGc] [C2G2][CE][DF] | [D2F2][EG][FA] [A4d4]|[CEGc] [C2G2][CE][DF] | [D2F2][EG][FA] [A4d4]|[CEGc] [C2G2][CE][DF] | [D2F2][EG][FA] [A4d4]|[CEGc] [C2G2][CE][DF] | [D2F2][EG][FA] [A4d4]|]")}>
                render abc
            </button>
            <div className="w-full bg-green-100 flex flex-col items-center" id="paper"></div>
        </div>
    )
}

export default Sheet;
