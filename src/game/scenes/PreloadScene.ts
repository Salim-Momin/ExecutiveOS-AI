import Phaser from "phaser";


export default class PreloadScene extends Phaser.Scene {


constructor(){

super("PreloadScene");

}


preload(){


this.load.image(
"executive_hq",
"/assets/backgrounds/executive_hq.png"
);


}


create(){

this.scene.start("OfficeScene");

}


}