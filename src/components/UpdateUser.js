import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const updatedUser = {...user};
        updatedUser[field] = value;
        setUser(updatedUser);
    }

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/update-user/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('User Updated Successfully.')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    

    return (
        <div>
            <h4> Update User: {storedUser.name}</h4>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name="name" />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name="email" required />
                <br />
                <button type='submit'> Update User </button>
            </form>
        </div>
    );
};

export default UpdateUser;