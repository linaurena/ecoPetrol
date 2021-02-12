// estilos del componente
import './CardUser.scss';

// import data from "../../assets/data.json";


import React, { Fragment } from 'react'


const CardUser = ({data}) => {

    // const statusUser = data.statusUser === 'EGRESADO' ? "egresado"  : ( data.statusUser === 'ACTIVO' ? "activo" : "ecopetrol");

    return (
        <Fragment>
            {data.map((user, index) => {
                return (
                    <div className='card' key={"card" + index}>
                        <div className="imgUser"><img src={user.photo} alt="" /></div>
                        <div className="nameUser">
                            <h3>{user.name} </h3>
                            <h3>{user.lastName}</h3>
                        </div>
                        {/* <div className="nameUser"><h3>{user.lastName}</h3></div> */}
                        <div className="occupationUser"><p>{user.occupation}</p></div>
                        <div className={user.statusUser.toLowerCase()}><p>{user.statusUser}</p></div>
                    </div>
                )
            })
            }

        </Fragment>

    );
}



export default CardUser;
