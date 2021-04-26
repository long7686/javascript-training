import {Node} from "../Libs/InitNode.js";
import {Label} from "../Libs/InitLabel.js"
import {Button} from "../Libs/InitButton.js"
import {BackGame} from "../Main.js"
import {changeVolume} from "../Main.js"
import {changeSound} from "../Main.js"

export class Option extends Node {
    constructor(){
        super();
    }
    
    _init(){
        this._initLabel()
        this._initButton()
        this._initSlideMusic()
        this._initSlideSound()
    }

    _initLabel(){
        var title = new Label("Option", {variant:"bold", style:"italic ", font:"Comic sans MS", size:"300%", color:"Red"})
        title.x = 310;
        title.y = 30;
        this.addChild(title);

        var music = new Label("Music", {variant:"bold", style:"italic ", font:"Comic sans MS", size:"150%", color:"green"})
        music.x = 350;
        music.y = 120;
        this.addChild(music);
        
        var sound = new Label("Sound", {variant:"bold", style:"italic ", font:"Comic sans MS", size:"150%", color:"green"})
        sound.x = 345;
        sound.y = 220;
        this.addChild(sound);
    }

    _initButton(){
        var bnt_Back = new Button("Back", "./img/buttonImage.png")
        bnt_Back._init();
        bnt_Back.positionX = 300;
        bnt_Back.positionY = 380;
        bnt_Back.on("mouseenter", () => bnt_Back.onMouse())
        bnt_Back.on("mouseleave", () => bnt_Back.offMouse())
        bnt_Back.on("mousedown",  () => BackGame());
        this.addChild(bnt_Back)
    }

    _initSlideMusic(){
        var sliderMusic = new Node()
        sliderMusic._initElementInput()
        sliderMusic.elm.setAttribute("type", "range");
        sliderMusic.x = 240
        sliderMusic.y = 180
        sliderMusic.wid = 300
        sliderMusic.elm.defaultValue = 50;
        sliderMusic.on("input", () => changeVolume(sliderMusic.elm.value))
        this.addChild(sliderMusic)
    }

    _initSlideSound(){
        var sliderSound = new Node()
        sliderSound._initElementInput()
        sliderSound.elm.setAttribute("type", "range");
        sliderSound.x = 240
        sliderSound.y = 280
        sliderSound.wid = 300
        sliderSound.elm.defaultValue = 50;
        sliderSound.on("input", () => changeSound(sliderSound.elm.value))
        this.addChild(sliderSound)
    }


}