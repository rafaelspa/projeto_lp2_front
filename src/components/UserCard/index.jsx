import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const stringEmMaiusculo = str => str.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
    return (
        <div>
            <Link to={'/usuarios/' + user.id}>
                <img src={user.picture.medium} />
                <p>{stringEmMaiusculo(user.name.first)} {stringEmMaiusculo(user.name.last)}</p>
                <p>{stringEmMaiusculo(user.location.street)}</p>
                <p>{stringEmMaiusculo(user.location.city)}</p>
                <p>{stringEmMaiusculo(user.location.state)} - CEP: {user.location.postcode}</p>
            </Link>
        </div>
    );
}

export default UserCard;

