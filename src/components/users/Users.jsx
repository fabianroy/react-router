import { useLoaderData } from "react-router-dom";
import User from './../user/User';
import './Users.css'


const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h3>Users : {users.length}</h3>
            <p>Our Vodro Users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;