import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/employee-list">Employee List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">User Name</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
