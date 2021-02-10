// estilos del componente
import './CardUser.scss';

// import data from "../../assets/data.json";


import React, { Fragment } from 'react'


const CardUser = ({data}) => {

    const statusUser = data.users.statusUser === 'EGRESADO' ? "egresado"  : ( data.users.statusUser === 'ACTIVO' ? "activo" : "ecopetrol");

    return (
        <Fragment>
            {data.users.map((user, index) => {
                return (
                    <div className='card'>
                        <div className="imgUser"><img src={user.img} alt="" /></div>
                        <div className="nameUser">
                            <h3>{user.name} </h3>
                            <h3>{user.lastName}</h3>
                        </div>
                        {/* <div className="nameUser"><h3>{user.lastName}</h3></div> */}
                        <div className="occupationUser"><p>{user.occupation}</p></div>
                        <div className={statusUser}><p>{user.statusUser}</p></div>
                    </div>
                )
            })
            }

        </Fragment>

    );
}



export default CardUser;
