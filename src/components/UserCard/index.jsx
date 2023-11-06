import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const UserCard = ({ user }) => {
    const stringEmMaiusculo = str => str.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    return (
        <div>
            <Link to={'/usuarios/' + user.id} className='user-card-container'>
                <img src={user.picture.medium} className="user-card-image" />
                <div className='user-card-bottom-container'>
                    <p>{stringEmMaiusculo(user.name.first)} {stringEmMaiusculo(user.name.last)}</p>
                    <p>{stringEmMaiusculo(user.location.street)}</p>
                    <p>{stringEmMaiusculo(user.location.city)}</p>
                    <p>{stringEmMaiusculo(user.location.state)} - CEP: {user.location.postcode}</p>
                </div>
            </Link>
        </div>
    );
}

export default UserCard;

