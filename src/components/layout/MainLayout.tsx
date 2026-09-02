"use client";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

import ActivityFeed from "../panels/ActivityFeed";
import CommandBar from "../panels/CommandBar";

import PhaserGame from "../game/PhaserGame";


export default function MainLayout(){

return (

<div
className="
w-screen
h-screen
overflow-hidden
flex
flex-col
bg-[#070B14]
"
>


{/* TOP BAR */}

<TopBar/>



{/* MAIN CONTENT */}

<div
className="
flex-1
flex
overflow-hidden
"
>


{/* SIDEBAR */}

<Sidebar/>



{/* PHASER AREA */}

<main

className="
flex-1
relative
overflow-hidden
"

>

<PhaserGame/>


</main>




{/* ACTIVITY */}

<ActivityFeed/>


</div>



{/* COMMAND BAR */}

<CommandBar/>


</div>

);

}