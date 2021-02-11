import React from 'react'

// estilos del componente
import './Search.scss';


function Search() {
    return (
        <div className="bar-search">
            <input placeholder="Buscar"></input>
            <i class="fas fa-search"></i>
        </div>

    )
}

export default Search;
