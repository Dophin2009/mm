import React, { useState } from "react";

import EquationBar from "./components/EquationBar";
import Rhs from "./components/Rhs";
import "./App.css";

function App() {
    const [equations, setEquations] = useState([]);
    const handleSubmit = ({ equations }) => {
        console.log("Submitted: ", equations);
        setEquations(() => equations);
    };

    return (
        <div className="w-full min-h-screen">
            <div className="w-full h-12 p-2 flex items-center shadow-md">
                <div className="text-medium font-bold">Musical Math</div>
            </div>

            <div className="w-full h-full flex flex-row">
                <div className="w-1/3 border-r-2 p-2">
                    <EquationBar handleSubmit={(data) => handleSubmit(data)} />
                </div>
                <div className="w-2/3 p-2">
                    <Rhs key={equations} equations={equations} />
                </div>
            </div>
        </div>
    );
}

export default App;
