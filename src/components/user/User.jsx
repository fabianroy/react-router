import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';
const User = ({user}) => {

    const{id, name, email, phone} = user;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid purple',
        margin: '10px',
        padding: '10px'
    }

    const handleShowDetails = () => {
        navigate(`/user/${id}`);
    }

    return (
        <div style={userStyle}>
            <p>{id}</p>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;