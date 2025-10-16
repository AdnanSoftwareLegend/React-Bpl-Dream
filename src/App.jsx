import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";
import { ToastContainer } from 'react-toastify';
 const fetchData=async ()=>{

  const res = await fetch('/players.json');

  return res.json();


 }


const fetchPlayers= fetchData();

function App() {



    
const [toggle,setToggle]=useState(true);

const [availableBalance,setAvailableBalance]=useState(600000000);

const [purchedPlayer,setPurchedPlayer]=useState([]);
console.log(purchedPlayer);


const removePlayer = (p) => {
  const filterData = purchedPlayer.filter(ply => ply.name !== p.name);
  setPurchedPlayer(filterData);
  setAvailableBalance(availableBalance  + parseInt( p.price.split("$").join("")))
};



  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>


<div className="max-w-[1000px] mx-auto border-blue-500 border-1 flex justify-between text-center">

  <p className="text-center p-2 ">{toggle===true?"Available Player " : `Selected Player (${purchedPlayer.length}/6)`}</p>

  <div>
    <button onClick={()=>setToggle(true)} className={`btn rounded-l-xl border-r-none   ${toggle==true && "bg-[#E7FE29]"}`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`btn rounded-r-xl border-l-none ${toggle==false && " bg-[#E7FE29]"}`}>Selected <span>({purchedPlayer.length})</span></button>
  </div>


</div >


  { toggle===true?   <Suspense   fallback={<span className="loading loading-ring loading-xl "></span>}>

<AvailablePlayer setPurchedPlayer={setPurchedPlayer} purchedPlayer={purchedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} fetchPlayers={fetchPlayers}></AvailablePlayer>

</Suspense> : <SelectedPlayer removePlayer={removePlayer} purchedPlayer={purchedPlayer}></SelectedPlayer>

}

 
<ToastContainer></ToastContainer>


    </>
  );
}

export default App;
