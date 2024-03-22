import PropTypes from 'prop-types'
import {useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, body, id } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid purple',
        margin: '10px',
        padding: '10px'
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <p>{id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;