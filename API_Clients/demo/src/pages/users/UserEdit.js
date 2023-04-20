import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function UserEdit(props) {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(function () {
        axios
            .get("https://642f704fc26d69edc87c8cb9.mockapi.io/api/users/" + id)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, []);
    const handleSubmit = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" value={user.name} onChange={this.handleChange} />
                </label>
                <button id="button1" >YES</button>
            </form>
        </div>
    );
}

export default UserEdit;