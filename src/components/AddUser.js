import React, { useState } from 'react';
import '../App.css';

const AddUser = () => {
    const [user, setUser] = useState([]);
    const handleInputBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);

        console.log(user);
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        event.target.reset();
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) alert("User inserted successfully");
                else alert("User insertion failed!");
            });
    }

    return (
        <div className='add-user-form'>
            <h3> Insert User Info </h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder='name' />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder='email' required />
                <br />
                <button type='submit'> Add User </button>
            </form>
        </div >
    );
};

export default AddUser;