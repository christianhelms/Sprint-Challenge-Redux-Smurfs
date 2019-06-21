import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <NavLink exact to='/'>Smurf Population</NavLink>
            <NavLink exact to='/AddSmurf'>Add Smurf</NavLink>
        </div>
    )
}

export default Nav;