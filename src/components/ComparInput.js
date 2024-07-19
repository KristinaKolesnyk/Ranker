import React from 'react';

const ComparInput = ({value, onChange}) => {
    return (
        <input
            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
            type="text"
            name="criterion"
            id="criterion"
            placeholder='Enter your comparison criterion'
            value={value}
            onChange={onChange}  // Call the parent function when the input changes.
        />
    )
}

export default ComparInput;