// Functional based component
import {useState} from "react";

const User = ({name}) => {

    const [Count] = useState(0);
    return (

        <div className="user-card">
            <h1>Count = {Count}</h1>
            <h2>Name:{name}</h2>
            <h2>Age:21</h2>
            <h2>course:Btech</h2>
            <h2>Contact:997*******</h2>

        </div>
    );
}
export default User;