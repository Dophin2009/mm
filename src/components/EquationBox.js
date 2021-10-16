import React from "react";

import deleteIcon from "../assets/delete.png";

function EquationBox({ label, name, register, remove }) {
    return (
        <div className="w-full border-t-2 py-2 flex flex-col">
            <div className="w-full flex flex-row">
                <div className="w-3/4 text-lg font-bold flex flex-start">
                    f(t) =
                    <input
                        {...register(name, { required: true })}
                        label={label}
                        className="border-gray-200 border-b-2 h-7 bottom-0"
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
        </div>
    );
}

export default EquationBox;
