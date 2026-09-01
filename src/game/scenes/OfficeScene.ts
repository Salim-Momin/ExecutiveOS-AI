import Phaser from "phaser";


export default class OfficeScene extends Phaser.Scene{


constructor(){

super("OfficeScene");

}



create(){


this.add.text(
100,
100,
"EXECUTIVEOS HQ",
{

fontFamily:"Pixelify Sans",

fontSize:"32px",

color:"#00E5FF"

}

);



}


}