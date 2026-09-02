"use client";

import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import PreloadScene from "./scenes/PreloadScene";
import OfficeScene from "./scenes/OfficeScene";


export const PhaserConfig: Phaser.Types.Core.GameConfig = {

type: Phaser.AUTO,

width:"100%",

height:"100%",

parent:"game-container",

pixelArt:true,

render:{
    antialias:false
},

scale:{
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
},

backgroundColor:"#070B14",


scene:[
BootScene,
PreloadScene,
OfficeScene
]

};