
// estilos del componente
import './Directory.scss';

import React, { useEffect, useState } from 'react'
import CardUser from '../../componentes/cardUser/CardUser';
import NavBar from '../../componentes/navBar/NavBar'

import dataUser from "../../assets/data.json";
import Search from '../../componentes/Search/Search';

import firestore from '../../controller/firestore';

// Función principal
const Directory = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const readUsers = () => {
        firestore.getUsers((listUsers) => {
            setDataUsers(listUsers);
        });
    };

    useEffect(() => {
        readUsers();
    }, []);


    return (
        <div className="container-directory">
            <div className="head-directory">
                <h2>Directorio</h2>
            </div>
            <div className="bar-head">
                <Search />
            </div>

            <div className="container-cards">
                <CardUser data={dataUsers} />
            </div>
            <NavBar />
        </div>
    )
}


export default Directory;
