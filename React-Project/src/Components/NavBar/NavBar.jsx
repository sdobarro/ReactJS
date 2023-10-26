import React from "react";
import { CartWidget } from "../Cartwidget/Cartwidget";
import styles from "../NavBar/NavBar.modules.css";

export const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {" "}
                    Only-Tech{" "}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Acerca de nosotros
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        {" "}
                                        Celulares {" "}
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        {" "}
                                        Relojes
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        {" "}
                                        Tablets
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "> Contactanos</a>
                        </li>
                    </ul>
                    <div className="nav-item">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-danger" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};
