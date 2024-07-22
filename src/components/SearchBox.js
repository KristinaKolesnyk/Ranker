import React from 'react';


const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa2-l'>
            <input
                className="br3 pa3 ba ma1 shadow-5 bg-washed-yellow "
                type="search"
                placeholder="Search ..."
                onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;