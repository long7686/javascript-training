import {Node} from "../Libs/InitNode.js"
import {Button} from "../Libs/InitButton.js"
import {Label} from "../Libs/InitLabel.js"
import {StartGame} from "../Main.js"
import {ExitGame} from "../Main.js"
import {OptionGame} from "../Main.js"
import {ResumeGame} from "../Main.js"
export class MenuStart extends Node{
    constructor(){
        super();
    }

    _init(){
        this._initButton();
    }

    _initButton(){
        var bnt_Start = new Button("Start", "./img/buttonImage.png");
        bnt_Start._init();
        bnt_Start.positionX = 300;
        bnt_Start.positionY = 240;
        bnt_Start.on("mouseenter", () => bnt_Start.onMouse())
        bnt_Start.on("mouseleave", () => bnt_Start.offMouse())
        bnt_Start.on("mousedown",  () => StartGame());
        this.addChild(bnt_Start)

        var bnt_Option = new Button("Option", "./img/buttonImage.png");
        bnt_Option._init();
        bnt_Option.positionX = 300;
        bnt_Option.positionY = 320;
        bnt_Option.on("mouseenter", () => bnt_Option.onMouse())
        bnt_Option.on("mouseleave", () => bnt_Option.offMouse())
        bnt_Option.on("mousedown",  () => OptionGame());
        this.addChild(bnt_Option)

        var bnt_exit = new Button("Exit", "./img/buttonImage.png");
        bnt_exit._init();
        bnt_exit.positionX = 300;
        bnt_exit.positionY = 400;
        bnt_exit.on("mouseenter", () => bnt_exit.onMouse())
        bnt_exit.on("mouseleave", () => bnt_exit.offMouse())
        bnt_exit.on("mousedown", () => ExitGame());
        this.addChild(bnt_exit)
    }

    _initResume(){
        var bnt_Continous = new Button("Resume", "./img/buttonImage.png");
        bnt_Continous._init();
        bnt_Continous.positionX = 300;
        bnt_Continous.positionY = 160;
        bnt_Continous.on("mouseenter", () => bnt_Continous.onMouse())
        bnt_Continous.on("mouseleave", () => bnt_Continous.offMouse())
        bnt_Continous.on("mousedown",  () => ResumeGame());
        this.addChild(bnt_Continous)
    }






}