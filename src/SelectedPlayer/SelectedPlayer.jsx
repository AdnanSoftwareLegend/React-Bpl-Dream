import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayer = ({purchedPlayer ,removePlayer}) => {
    console.log(purchedPlayer);
    
    return (
        <div className='max-w-[1000px] mx-auto'>


   { 
 purchedPlayer.map(player=><SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>  )

   }

             
            
        </div>
    );
};

export default SelectedPlayer;