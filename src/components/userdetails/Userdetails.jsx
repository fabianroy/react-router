import { useLoaderData, useNavigate } from "react-router-dom";

const Userdetails = () => {
    const userDetail = useLoaderData();
    const navigate = useNavigate();
    const {name, email, phone} = userDetail;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Details about users</h3>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Userdetails;