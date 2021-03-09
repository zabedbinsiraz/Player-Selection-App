import React, { useEffect, useState } from 'react';
import './Container.css';
import PlayerData from '../../FakeData/playersData.json'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Container = () => {
    const [player,setPlayer] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>  {
        setPlayer(PlayerData);
    },[]);

    const handleAddPlayers = (newPlayer) =>{
          
        const newCart=[...cart,newPlayer];
        setCart(newCart);
    }

    return (
        <div>
            <div className="playersContainer">
                <div className="playerContainer">
                   <div>
                   {
                        player.map(plyr => 
                            <Player player={plyr} 
                            key={plyr.id}
                            handleAddPlayers={handleAddPlayers} 
                             ></Player>)
                    }
                   </div>
                </div>
                <div className="cartContainer">
                    <Cart cart={cart} ></Cart>

                </div>
            </div>
        </div>
    );
};

export default Container;