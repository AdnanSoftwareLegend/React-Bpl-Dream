import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log("playrrtsdffffffffff");
    
    const removeEventListener=()=>{
        removePlayer(player);
    }

    return (
        
        <div className='max-w-[1000px] mx-auto'>
            <div className='flex justify-between border-2 border-red-200 text-center  items-center'>

  <div className=" flex gap-4 items-center">
    <img src={player.image_url} alt="" />
    <div>
    <p>{player.name}</p>
        <p>{player.batting_style}</p>
    </div>
  </div>

 <button className='btn' onClick={()=>{removeEventListener()}}> 
    <img src="https://i.ibb.co.com/rfbhctTM/Frame.png" alt="" className='h-[50px] w-[50px]' />
  </button>

</div>
        </div>
    );
};

export default SelectedCard;