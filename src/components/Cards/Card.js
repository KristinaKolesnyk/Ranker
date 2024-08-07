import React from 'react';
import Swal from "sweetalert2";
//import {useNavigate} from "react-router-dom";

const Card = ({name, id, icon, navigate, onDelete}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('delete-icon')){
            return;
        }
       navigate(`/yourlist`, {state: {categoryId: id ,categoryName: name}});
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this category?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id);
                Swal.fire({
                    icon:'success',
                    title: 'Category deleted',
                    text: "The category has been deleted successfully."
                })
            }
        })


    }

    return (
        <div className='tc dib card-container' onClick={handleClick}>
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5 card-content">
                <img alt='categories' src={`http://localhost:3000${icon}`} width='250' height='250'/>
                <div className='delete-icon' onClick={handleDeleteClick}>&times;</div>
            </div>

            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}
export default Card;

