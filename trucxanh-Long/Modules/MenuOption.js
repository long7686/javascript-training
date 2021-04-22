import {Node} from "../Libs/InitNode.js";
import {Label} from "../Libs/InitLabel.js"
import {Button} from "../Libs/InitButton.js"
import {BackGame} from "../Main.js"

export class Option extends Node {
    constructor(){
        super();
    }
    
    _init(){
        this._initLabel()
        this._initButton()
        
    }

    _initLabel(){
        var title = new Label("Option", {variant:"bold", style:"italic ", font:"Comic sans MS", size:"200%", color:"Red"})
        title.x = 330;
        title.y = 100;
        this.addChild(title);
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
}