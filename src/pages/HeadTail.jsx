import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeadTail = () => {
    const [selected, setSelected] = useState('');
    const [columns, setColumns] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!selected) {
            setError('Please select a value from dropdown');
            return;
        }

        setError('');
        setSelected('');

        const lastCol = columns[columns.length - 1];
        const updatedColumns = [...columns];

        if (!lastCol || lastCol[0] !== selected) {
            updatedColumns.push([selected]);
        } else {
            updatedColumns[updatedColumns.length - 1] = [...lastCol, selected];
        }

        setColumns(updatedColumns);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center py-8 px-2">
            {/* Breadcrumb */}
            <nav className="w-full max-w-4xl text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
                <Link to="/" className="hover:underline">Home</Link> &gt;
                <span className="ml-2 text-white font-semibold">Head & Tail</span>
            </nav>

            {/* Container */}
            <div className="bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 p-4 sm:p-8 w-full max-w-md sm:max-w-xl mx-auto">
                <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Head & Tail </h1>

                {/* Dropdown + Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-40 sm:w-52 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Value</option>
                        <option value="H">H</option>
                        <option value="T">T</option>
                    </select>

                    <button
                        onClick={handleSubmit}
                        className="bg-black text-white px-4 sm:px-6 py-2 rounded shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        Submit
                    </button>

                </div>

                {/* Validation Message */}
                {error && <p className="text-red-600 text-xs sm:text-sm mt-2">{error}</p>}

                {/* Result Columns */}
                <div className="flex gap-3 sm:gap-6 mt-6 sm:mt-8 justify-start sm:justify-center overflow-x-auto scrollbar-thin px-2 sm:px-4 py-2 scrollbar-thin scrollbar-thumb-gray-400">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col items-center gap-1 sm:gap-2">
                            {col.map((val, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-semibold border border-blue-300 rounded hover:bg-blue-200 transition duration-200"
                                >
                                    {val}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeadTail;
