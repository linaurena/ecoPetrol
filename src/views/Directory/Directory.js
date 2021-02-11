
// estilos del componente
import './Directory.scss';

import React, { useEffect, useState }  from 'react'
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
            <h2>Directorio</h2>
            <Search />
            {/* <div className="container-cards">
                <CardUser data={dataUser} />
            </div> */}

            <div>
                {dataUsers.map((user, index) => {
                    return(<p>{user.name}</p>)
                    

                })
            }

            </div>
            <NavBar/>
        </div>
    )
}


export default Directory;
