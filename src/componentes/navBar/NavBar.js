import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//hay un componente navLInk maneja active

// estilos del componente
import './NavBar.scss';

// import { FontAwasomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <NavLink  to="/directorio"  activeClassName="selected">
                            <div className="nav-bar-item">
                                <i className="fas fa-address-book"></i>
                                <p className="title-nav-bar">Directorio</p>
                            </div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink  to="/dashboard"  activeClassName="selected">
                            <div className="nav-bar-item">
                                <i className="fas fa-thumbtack"></i>
                                <p className="title-nav-bar">Muro</p>
                            </div>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink  to="/chat"  activeClassName="selected">
                            <div className="nav-bar-item">
                                <i className="fas fa-comment-dots"></i>
                                <p className="title-nav-bar">Chat</p>
                            </div>
                        </NavLink >
                    </li>
                </ul>
            </nav>
            {/* <div className="circulo"></div> */}
        </div>
    )
}

export default NavBar;
