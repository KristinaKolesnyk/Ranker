import React from 'react';
import './Item.css';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Item = ({id, name, criterions, url, avgRating, criteria, onDelete, categoryName, categoryId}) => {
    const criterionValues = criteria.map(c => {
        const criterion = criterions.find(cr => cr.criterion_id === c.id);
        return criterion ? criterion.value : '-';
    });

    const navigate = useNavigate();

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5DADE2',
            cancelButtonColor: '#EC7063',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) =>{
            if (result.isConfirmed) {
                onDelete(id);
                Swal.fire({
                    icon:'success',
                    title: 'Item deleted',
                    text: "The item has been deleted successfully.",
                    showConfirmButton: false,
                    timer: 1600
                })
            }
        })
    }
    const handleEdit = () => {
        navigate('/edititem', {
            state: {
                id,
                name,
                criterions,
                url,
                criteria,
                categoryId,
                categoryName
            }
        });
    }

    return (
        <div className='grid-header grid-item'>
            <div><h3>{name}</h3></div>
            {criterionValues.map((value, index) => (
                <div key={`${name}-${index}`}><h3>{value}</h3></div>
            ))}

            <div>{url ? (
                <a href={url} target='_blank' rel='noopener noreferrer'><h3>Visit Site</h3></a>) : (
                <h3>No URL Provided</h3>
            )}</div>
            <div><h3>{avgRating}</h3></div>

            <div className='button'>
                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height: 50}}
                     onClick={handleEdit}>
                    <img
                        alt='edit' src={`/img/edit.png`}/>
                </div>

                <div className="bg-washed-yellow br3 grow pa2 ma1 bw2 shadow-5" style={{width: 50, height: 50}}
                     onClick={handleDelete}>
                    <img
                        alt='delete' src={`/img/delete.png`}/>
                </div>
            </div>
        </div>
    );
}

export default Item;
