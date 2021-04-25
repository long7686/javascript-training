import {Node} from "./InitNode.js";
import {Label} from "./InitLabel.js";
import {Sprite} from "./InitSprite.js";
export class Button extends Node {
    constructor(text, path) {
        super();
        this.text;
        this.path;
        this.posX;
        this.posY;
        this._bntWid;
        this._bntHei;
        if (text)  this.text = text;
        if (path)  this.path = path;
    }


    get positionX(){
        return this.posX;
    }
    set positionX(value){
        this.posX = value;
        this.x = this.posX;
    }

    get positionY(){
        return this.posY;
    }
    set positionY(value){
        this.posY = value;
        this.y = this.posY;
    }

    get bntWid(){
        return this._bntWid;
    }
    set bntWid(value){
        this._bntWid = value;
        this.wid = this._bntWid;
    }

    get bntHei(){
        return this._bntHei;
    }
    set bntHei(value){
        this._bntHei = value;
        this.hei = this._bntHei;
    }

    _init(){
        this._initCover();
        this._initlabel();
    }

    _initCover(){
        var cover = new Sprite(this.path)
        cover.wid = 150;
        cover.hei = 50;
        cover.src = this.path;
        cover.elm.node = this;
        this.addChild(cover);      
    }

    _initlabel(){
        var label = new Label(this.text, {variant:"bold", style:"italic ", font:"Comic sans MS", size:"125%", color:"green"});
        label.elm.node = this;
        label.x = 45;
        label.y = 10;
        this.addChild(label);
    }

    onMouse(){
        this.path = "./img/buttonImage2.png"
        this._init();
    }

    offMouse(){
        this.path = "./img/buttonImage.png"
        this._init();
    }

}