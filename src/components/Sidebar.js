import React from 'react';
import newIcon from '../assets/add.png';
import updateIcon from '../assets/update.png';

function Sidebar() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-row">
                <div className="w-1/2 text-lg font-bold flex flex-start">
                    Equations
                </div>
                <div className="w-1/2 flex flex-row justify-end gap-2">
                    <button className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md">
                        <img src={newIcon} alt="+" className="w-4 h-4" />
                    </button>
                    <button className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md">
                        <img src={updateIcon} alt="Update" className="w-4 h-4" />
                    </button>
                </div>
                
            </div>

            <div className="py-2" />
            <div className="w-full border-t-2 py-2 flex flex-col">
                <div className="w-full">
                    f(t)...
                </div>
                <div>
                    Some additional sliders and configurations
                </div>
            </div>
            <div className="border-t-2 py-2 flex items-center">
                f(t)
            </div>
        </div>
    );
}

export default Sidebar;