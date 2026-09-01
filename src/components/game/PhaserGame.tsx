"use client";


import {useEffect} from "react";

import Game from "@/game/Game";


export default function PhaserGame(){


useEffect(()=>{


const game =
new Game();


game.start();



return()=>{

game.destroy();

}



},[]);



return(

<div

id="game-container"

className="
w-full
h-full
"

></div>

)


}