import React, { use } from 'react';


import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayer = ({fetchPlayers , setAvailableBalance,availableBalance,purchedPlayer,setPurchedPlayer}) => {

   const players = use(fetchPlayers);
   console.log(players);
   

    return (


        <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-4 grid-cols-1'>

{
        players.map(player=> <PlayerCard setPurchedPlayer={setPurchedPlayer} purchedPlayer={purchedPlayer} setAvailableBalance={setAvailableBalance} player={player} availableBalance={availableBalance} ></PlayerCard>
         )

}   
        </div>
    );
};

export default AvailablePlayer;