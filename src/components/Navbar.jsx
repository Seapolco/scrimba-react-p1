import React from 'react';
import logo from '../assets/react.svg'


const Navbar = () => {
    

    return (
       <div className='navContainer'>
            <div className='logo'>
                <img className='navLogo' src={logo} />
                <h3 className='reactFacts'>React Facts</h3>
            </div>
            <div className='reactCourse'>Reacts Course - Project 1</div>
       </div>
    )
}

export default Navbar