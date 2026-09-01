import Phaser from "phaser";

import BootScene from "./scenes/BootScene";
import PreloadScene from "./scenes/PreloadScene";
import OfficeScene from "./scenes/OfficeScene";


export const PhaserConfig: Phaser.Types.Core.GameConfig = {

type: Phaser.AUTO,


width:1280,

height:720,


parent:"game-container",


backgroundColor:"#070B14",


pixelArt:true,


physics:{

default:"arcade",

arcade:{

debug:false

}

},


scene:[

BootScene,

PreloadScene,

OfficeScene

]

};