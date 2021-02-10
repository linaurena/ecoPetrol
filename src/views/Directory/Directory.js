
// estilos del componente
import './Directory.scss';

import React from 'react'
import CardUser from '../../componentes/cardUser/CardUser';
import NavBar from '../../componentes/navBar/NavBar'

import dataUser from "../../assets/data.json";
import Search from '../../componentes/Search/Search';




const Directory = () => {
    return (
        <div className="container-directory">
            <h2>Directorio</h2>
            <Search />
            <div className="container-cards">
                <CardUser data={dataUser} />
            </div>
            <NavBar/>
        </div>
    )
}


export default Directory;
