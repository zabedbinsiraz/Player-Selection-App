import React from 'react';
import './Player.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAdjust } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const player = props.player;
    const {name, image, salary} = player;
    
    const handleAddPlayers = props.handleAddPlayers;
  
   
    return (
        <div className="player">
            <div >
            <img className="playerImg"  src={image} alt=""/>
            </div>
            <div className="playerInfo">
                
            <h3> {name}</h3>
             <h5>Salary : {salary}</h5>
             <button className="btn" onClick={() => handleAddPlayers(player)}> <FontAwesomeIcon icon={faAdjust} /> Select</button>
            </div>
            
        </div>
    );
};

export default Player;