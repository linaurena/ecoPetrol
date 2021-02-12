import React, { useState } from 'react'

// estilos del componente
import './Search.scss';


const Search = ({ dataUsers, setDataUsers, readUsers }) => {

    const handleInputChange = (e) => {
        let a = e.target.value;
        if (a.length > 5) {
            // setDataIn(a)
            filterData(a)
        }
        else if (a.length === 0) {
            readUsers();
        }
    };

    const filterData = (data) => {
        console.log(data);
        console.log(dataUsers);
        let newData = [];
        const a = dataUsers.filter((el) => {
            if (el.name.toLowerCase() === data.toLowerCase() || el.lastName.toLowerCase() === data.toLowerCase() || el.statusUser.toLowerCase() === data.toLowerCase()) {
                newData = [...newData, el];
                setDataUsers(newData);
            }
        })
    }

    return (
        <div className="bar-search">
            <input placeholder="Buscar" onChange={handleInputChange} ></input>
            <i className="fas fa-search"></i>
        </div>
    )
}

export default Search;
