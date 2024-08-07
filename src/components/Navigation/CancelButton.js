import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import "./ButtonSize.css"


const CancelButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        const {categoryId, categoryName, criteria} = location.state || {};
        Swal.fire({
            icon: 'info',
            title: 'Cancelled',
            text: "You have cancelled adding/editing the item.",
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            navigate('/yourlist', {
                state: {categoryId, categoryName, criteria},
                replace: true,
            });
        })
    }

    return (
        <nav >
            <button onClick={handleClick}
                    className='buttonsize br3 grey grow shadow-5 create-btn'>Cancel
            </button>
        </nav>);
}

export default CancelButton;