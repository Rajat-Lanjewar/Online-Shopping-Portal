import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

import { Link } from 'react-router-dom';

const mystyle = {
    color: "#000000",
    fontSize: "1.5rem",
    fontFamily: "comic sans ms"
};


function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark justify-content-between shadow-sm" style={mystyle}>
            <div class="navbar-collapse collapse "style={{backgroundColor:"#f1ff09"}}>
            <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
                    <a className="navbar-brand" href="#"><h3 style={{color:"black",fontFamily: "comic sans ms"}}>Online Shopping Portal</h3></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" style={{color:"black"}}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" style={{color:"black"}}>Product </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact" style={{color:"black"}}>Contact </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="btn btn-info ms-4 my-2 my-sm-2" to="/search">
                            <i class="fa fa-search"></i>
                        </Link>
                    </li>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
                <Link className="nav-link" to="/cart">
                            <i class="fa fa-shopping-bag"></i>
                            {cart.length > 0 &&
                                <span class="desktop-badge">
                                    {cart.length}
                                </span>
                            }
                        </Link>
                    <Link className="btn btn-outline-primary ms-2 my-2 my-sm-0" to="/login"><i class="fa fa-sign-in fa-lg me-2"></i>Login </Link>
                    <Link className="btn btn-outline-primary ms-2 my-2 my-sm-0" to="/customers"><i class="fa fa-user fa-lg "></i></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar