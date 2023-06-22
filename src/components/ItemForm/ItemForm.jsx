import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ItemForm() {
    const [image, setImage] = useState('')
    const [description, setDiscription] = useState('')
    const dispatch = useDispatch();

    





    const postItem = (event) => {
        event.preventDefault();
        dispatch({type: 'POST_ITEM', payload: {image: image , description: description}})

        setImage('');
        setDiscription('');

        


    }





    return (
        <div className="container">
            <div>
                <form onSubmit={postItem}>
                    <input
                    placeholder='description'
                    type='text'
                    value={description}
                    onChange={(event) => setDiscription(event.target.value)}
                    required
                    >
                    </input>

                    <input
                    placeholder='image here'
                    type='text'
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required
                    >
                    </input>

                    <button type='submit'>submit</button>
                </form>

                
            </div>

            
        </div>

    );
}

export default ItemForm;