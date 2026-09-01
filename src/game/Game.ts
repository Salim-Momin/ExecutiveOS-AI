import Phaser from "phaser";

import {PhaserConfig} from "./config";


export default class Game {


private game?: Phaser.Game;



start(){

if(this.game)
return;


this.game = new Phaser.Game(
PhaserConfig
);


}



destroy(){

this.game?.destroy(true);

}



}