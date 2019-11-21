import React from 'react';
import './style.css';
// renders the basic start menu. See readme for more details
export default function getStartMenu()
{
    return (<section aria-label="section" id="mainmenu">
        <h1 id="title">Guess The Doggo</h1>
        <div>
            <button className = "verticaldisplay">Start</button>
            <button className = "verticaldisplay">How To Play</button>
            <button className = "verticaldisplay">Credits</button>
        </div>
        
    </section>);
}