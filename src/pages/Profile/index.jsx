import React, { useEffect, useState } from 'react';
import { api } from '../../services/axios.js';
import { useParams } from 'react-router-dom';
import './style.css'

const Profile = () => {
    const { id } = useParams();

    const [user, setUser] = useState({
        id: 1,
        type: "",
        gender: "",
        name: {},
        location: {},
        timezone: {},
        email: "",
        birthday: "",
        registered: "",
        telephoneNumbers: [],
        mobilePhoneNumbers: [],
        picture: {},
        nationality: "",
    });

    useEffect(() => {
        api.get(`/users/${id}`)
            .then(response => {
                const data = response.data;
                setUser(data);
            })
    }, [])

    return (
        <div className='profile-container'>
            <img src={user.picture.large} />
            <h1>User Profile</h1>
            <p>ID: {user.id}</p>
            <p>Type: {user.type}</p>
            <p>Name: {user.name.last} {user.name.title} {user.name.first} </p>
        </div>
    );
}

export default Profile;
