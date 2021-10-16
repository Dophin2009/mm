import React from 'react';

function Sidebar() {
    return (
        <div className="w-full">
            <div className="text-lg font-bold">
                Equations
            </div>
            <div className="w-full p-4 flex flex-row justify-evenly">
                <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md">
                    New Equation
                </button>
                <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md">
                    Update
                </button>
                <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md">
                    Play
                </button>
            </div>
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