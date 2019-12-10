import { Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
    return (
        <ul>
            <li>
                <Link to="/admin/posts">Posts</Link>
            </li>
            <li>
                <Link to="/admin/users">Users</Link>
            </li>
        </ul>
    );
};

export default SideBar;
