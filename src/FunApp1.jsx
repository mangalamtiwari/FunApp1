import React, { useState } from 'react'
const FunApp1 = () => {
    const [value, changedValue] = useState(0);
    const decrement = () => {
        if (value === 0) {
            alert("Can't decrease the value below 0");
        }
        else {
            changedValue(value - 1);
        }
    }
    const increment = () => {
        changedValue(value + 1);
    }

    return (
        <>
            <div className="funApp">
                <div className="title">
                    <h1>Fun App</h1>
                </div>
                <div className="container">
                    <div className="display">
                        <h1>{value}</h1>
                    </div>
                    <div className="button">
                        <button onClick={decrement}>
                            Decrement
                        </button>
                        <button onClick={increment}>
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunApp1
