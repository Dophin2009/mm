import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

import Expr from "../internal/Expr";
import EquationBox from "./EquationBox";
import newIcon from "../assets/add.png";
import updateIcon from "../assets/update.png";

function EquationBar({ handleSubmit }) {
    const {
        control,
        register,
        handleSubmit: wrapSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            equations: [
                {
                    str: "30sin(t)",
                    start: "0",
                    end: "2pi",
                    step: "pi/24",
                    duration: "1",
                },
                {
                    str: "30cos(t)",
                    start: "0",
                    end: "2pi",
                    step: "pi/24",
                    duration: "1",
                },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "equations",
    });

    const items = fields.map((eq, idx) => {
        const num = idx + 1;
        const name = `equations.${idx}`;

        return (
            <EquationBox
                key={num}
                label={num}
                registerEqu={() =>
                    register(`${name}.str`, {
                        required: "A valid equation is required!",
                    })
                }
                registerStart={() =>
                    register(`${name}.start`, {
                        required: "Start is required!",
                        setValueAs: (val) => new Expr(val),
                    })
                }
                registerEnd={() =>
                    register(`${name}.end`, {
                        required: "End is required!",
                        setValueAs: (val) => new Expr(val),
                        validate: (val) => {
                            const { equations } = getValues();
                            const start = equations[idx].start.eval();
                            return (
                                val.eval() > start ||
                                "End must be greater than start!"
                            );
                        },
                    })
                }
                registerStep={() =>
                    register(`${name}.step`, {
                        required: "Step is required!",
                        setValueAs: (val) => new Expr(val),
                        validate: (val) =>
                            val.eval() > 0 || "Step must be greater than 0",
                    })
                }
                registerDuration={() =>
                    register(`${name}.duration`, {
                        required: true,
                        setValueAs: (val) => parseInt(val),
                    })
                }
                remove={() => remove(idx)}
            />
        );
    });

    return (
        <div className="w-full">
            <form onSubmit={wrapSubmit(handleSubmit)}>
                <div className="w-full flex flex-row">
                    <div className="w-1/2 text-lg font-bold flex flex-start">
                        Equations
                    </div>
                    <div className="w-1/2 flex flex-row justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => append({ str: "" })}
                            className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                        >
                            <img src={newIcon} alt="+" className="w-4 h-4" />
                        </button>
                        <button
                            type="submit"
                            className="bg-gray-200 text-black-500 font-bold opacity-60 hover:opacity-100 px-2 py-2 rounded-md"
                        >
                            <img
                                src={updateIcon}
                                alt="Update"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>
                </div>

                <div className="py-2" />
                {items}
            </form>
        </div>
    );
}

export default EquationBar;
