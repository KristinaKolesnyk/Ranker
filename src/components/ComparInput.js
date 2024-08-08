import React from 'react';

const ComparInput = ({value, onChange}) => {
    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 15) {
            onChange(e);
        }
    };

    return (
        <input
            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
            type="text"
            name="criterion"
            id="criterion"
            placeholder='Enter your comparison criterion'
            value={value}
            onChange={handleChange}
        />
    )
}

export default ComparInput;
