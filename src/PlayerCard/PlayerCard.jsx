import React, { useState } from 'react';

import userImg from '../assets/user.png'

import flag from '../assets/flag.png'
import { toast } from 'react-toastify';


const PlayerCard = ({player,setAvailableBalance,availableBalance,purchedPlayer,setPurchedPlayer}) => {

    const [isSelected,setIsSelectd]= useState(false);

    



const handleSelected=(player)=>{


    if(availableBalance<player.price.split("$").join("") ){
        toast("Not Enough Amount ")
    }

    else{

         setIsSelectd(true)
        setAvailableBalance(availableBalance-player.price.split("$").join("") )

    }



    setPurchedPlayer([...purchedPlayer,player]);
}
    
    return (
       <div className=" card bg-base shadow-sm mb-4">
  <figure>
    <img  className='mb-2 w-full md:h-[300px] object-cover'
      src={player.image_url}
      alt="Shoes" />
  </figure>
 
    
    <div className="flex gap-5">
        <img src={userImg} alt="" />
 <h2 className=" font-bold">{player.name}</h2>
 </div>

<div className='flex justify-between mt-2 border-b-1 mb-2' >

    <div className=' flex gap-4 '>
<img src={flag} alt="" />
<span className=''>{player.country}</span>
</div>

<button className='btn mb-0.5'>{player.role}</button>
</div>


<div className=" flex justify-between">
 <span className='font-bold'>Rating</span>
 <span className='font-extrabold mr-1.5'>5</span>

</div>

<div className='flex justify-between mt-1.5 mb-1'>
<p className='font-bold'>Batting-style</p>
<p>{player.batting_style}</p>

</div>



    <div className="flex justify-between mt-1.5">
        <span className=''>Price:${player.price}</span>
      <button disabled={isSelected} onClick={()=>{
       
handleSelected(player);
      }} className="btn  ">{isSelected===true ? "Selectd Player" :"Choose Player" }</button>
    </div>
  
</div>
    );
};

export default PlayerCard;