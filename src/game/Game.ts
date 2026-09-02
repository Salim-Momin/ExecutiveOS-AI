import Phaser from "phaser";

import { PhaserConfig } from "./config";


let game: Phaser.Game | null = null;


export function startGame() {

    if (game) {
        return;
    }


    game = new Phaser.Game(
        PhaserConfig
    );


}



export function destroyGame() {

    if (!game) {
        return;
    }


    game.destroy(true);


    game = null;

}