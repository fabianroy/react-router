import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
const Postdetails = () => {

    const postDetails = useLoaderData();

    const navigate = useNavigate();

    const {postId} = useParams();
    console.log(postId);

    const { id, title, body } = postDetails;

    const handleGoback = () => {
        navigate(-1);
    }

    return (
        <div>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default Postdetails;