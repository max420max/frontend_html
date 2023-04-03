import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { useKeycloak } from "@react-keycloak/web";




const Nav = () => {
    const { keycloak, initialized } = useKeycloak();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Keycloak React AUTH</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link ms-5" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5" href="/user">User</a>
                        </li>
                        <div className="hidden xl:flex items-center space-x-5">
                        <div className="hover:text-gray-200">
                            {!keycloak.authenticated && (
                                <button
                                    type="button"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    onClick={() => keycloak.login()}
                                >
                                    Login
                                </button>
                            )}

                            {!!keycloak.authenticated && (
                                <button
                                    type="button"
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    onClick={() => keycloak.logout()}
                                >
                                    Logout ({keycloak.tokenParsed.preferred_username})
                                </button>
                            )}
                        </div>
                    </div>

                    </ul>
                    

                </div>
            </nav>
        </div>
    );
};

export default Nav;