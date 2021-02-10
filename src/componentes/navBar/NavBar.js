import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/directorio">
                            <div className="nav-bar-item">
                                <i className="fas fa-address-book"></i>
                                <p className="title-nav-bar">Directorio</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/directorio">
                            <div className="nav-bar-item">
                                <i className="fas fa-address-book"></i>
                                <p className="title-nav-bar">Muro</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/directorio">
                            <div className="nav-bar-item">
                                <i class="fas fa-comment-dots"></i>
                                <p className="title-nav-bar">Chat</p>
                            </div>
                        </Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default NavBar
