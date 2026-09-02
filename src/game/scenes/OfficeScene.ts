import Phaser from "phaser";


export default class OfficeScene extends Phaser.Scene{


constructor(){

super("OfficeScene");

}



create(){


const office =
this.add.image(
0,
0,
"executive_hq"
);



office.setOrigin(0);



const scaleX =
this.scale.width /
office.width;


const scaleY =
this.scale.height /
office.height;



const scale =
Math.min(
this.scale.width / office.width,
this.scale.height / office.height
);


office.setScale(scale);


office.setPosition(
this.scale.width / 2,
this.scale.height / 2
);


office.setOrigin(0.5);



this.cameras.main.setBounds(
0,
0,
office.width,
office.height
);



this.cameras.main.centerOn(
office.width/2,
office.height/2
);



}


}