import React from 'react';
import backgroundLogo from '../assets/reactjs-icon2.png'

const MainContent = () => {
    return (
        <main className='mainContent'>
            <h1 className='mainHeader'>Fun facts about React</h1>
            <ul className='factsList'>
                <li>Was released in 2013</li>
                <li>Created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including <br/>
                    mobile apps</li>
            </ul>
            <img className='backgroundLogo' src={backgroundLogo} />
        </main>
    )
}

export default MainContent