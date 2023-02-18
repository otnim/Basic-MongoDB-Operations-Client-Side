import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const deleteUser = (id) => {
        const isAgree = window.confirm('DELETE! Are you sure?');
        if (isAgree) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div>
            <h3> This is Home page: {users.length} </h3>
            {
                users.map(user => {
                    return <div key={user._id}>
                        <p> {user.name}
                            <Link to={`/update-user/${user._id}`}> Update User </Link>
                            <button onClick={() => deleteUser(user._id)}> X </button>
                        </p>

                    </div>
                })
            }
        </div>
    );
};

export default Home;