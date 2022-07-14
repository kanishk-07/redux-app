import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const amount = useSelector(state => state.amount);
	return (
		<div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item mx-5">
                            <Link className="navbar-brand" to="/">
                                <img src="logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top" aria-current="page" />
                                State Bank of Shahganj
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mx-5">
                        <li className="nav-item mx-5">
                            <button className="btn btn-info">Your Balance: {amount}</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
	)
}

export default Navbar