import { useNavigate, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error);
    const handleBackToSafety = () => {
        navigate('/');
    }
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <p>{error.statusText || error.message}</p>
            <button onClick={handleBackToSafety}>Back to Safety</button>
        </div>
    );
};

export default Errorpage;