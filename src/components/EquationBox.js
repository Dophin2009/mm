import React from "react";

import deleteIcon from "../assets/delete.png";

function EquationBox({
    label,
    registerEqu,
    registerStart,
    registerEnd,
    registerStep,
    registerDuration,
    remove,
}) {
    return (
        <div className="w-full border-t-2 py-2 flex flex-col">
            <div className="w-full flex flex-row">
                <div className="w-3/4 text-lg font-bold flex flex-start">
                    f(t) =
                    <input
                        {...registerEqu()}
                        placeholder="..."
                        label={label}
                        className="h-7 bottom-0 mx-2 w-52 focus:outline-none"
                    />
                </div>
                <div className="w-1/4 flex flex-row justify-end gap-2">
                    <button
                        type="submit"
                        className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                        onClick={() => remove()}
                    >
                        <img
                            src={deleteIcon}
                            alt="Delete"
                            className="w-4 h-4"
                        />
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-row">
                <div className="text-lg font-bold flex flex-start">
                    S:
                    <input
                        className="h-7 bottom-0 w-16 mx-2 focus:outline-none"
                        defaultValue="1"
                        {...registerStart()}
                    />
                </div>
                <div className="text-lg font-bold flex flex-start">
                    E:
                    <input
                        className="h-7 bottom-0 w-16 mx-2 focus:outline-none"
                        defaultValue="10"
                        {...registerEnd()}
                    />
                </div>
                <div className="text-lg font-bold flex flex-start">
                    ST:
                    <input
                        className="h-7 bottom-0 w-16 mx-2 focus:outline-none"
                        defaultValue="1"
                        {...registerStep()}
                    />
                </div>
                <div className="text-lg font-bold flex flex-row justify-end gap-2">
                    D:
                    <select
                        className="h-7 bottom-0 w-16 mx-2 focus:outline-none"
                        defaultValue="2"
                        {...registerDuration()}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default EquationBox;
