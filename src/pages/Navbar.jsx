import React from 'react';
import {Link} from 'react-router-dom';

export default function navbar(){
    return(
        <>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
                </li> 
                <li>
                <Link to='/cards'>Cards</Link>
                </li>
            </ul>
            </>
    )
}