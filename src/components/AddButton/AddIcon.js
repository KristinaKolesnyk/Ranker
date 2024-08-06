import React, { useState } from 'react';

const AddIcon = ({onIconUpload}) => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('Upload Icon');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageName('Your Icon');
            // Загрузите изображение на сервер здесь
            const formData = new FormData();
            formData.append('file', file);
            fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    onIconUpload(data.imageUrl)
                })
                .catch(error => console.error('Error uploading image:', error));
        }
    }

    return (
        <div className="tc ma3-l dib">
            <div className="bg-washed-yellow br3 grow ma2 pa3 bw2 shadow-5">
                <label htmlFor="upload-icon">
                    <img
                        alt='icon'
                        src={image || `/img/add.png`}
                        width='70'
                        height='70'
                    />
                </label>
                <input
                    id="upload-icon"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <h2>{imageName}</h2>
            </div>
        </div>
    );
}

export default AddIcon;
