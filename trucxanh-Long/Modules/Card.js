import {Node} from "../Libs/InitNode.js";
import {Label} from "../Libs/InitLabel.js";
import {Sprite} from "../Libs/InitSprite.js";
export class Card extends Node {
    constructor(text, path) {
        super();
        this.text;
        this._path;
        this._pointerEvent;
        if (text)  this.text = text;
        if (path)  this.path = path;
    }

     get pointerEvent(){
         return this._pointerEvent;
     }
     set pointerEvent(value){
         this._pointerEvent = value;
         this.elm.style.pointerEvents = this._pointerEvent;
     }

     get path(){
        return this._path;
     }
     set path(value){
        this._path = value;
        this.elm.src = this._path;
     }

    _init(){
        this._initCover();
        this._initlabel();
    }

    _initCover(){
        var cover = new Sprite(this._path)
        cover.wid = 100;
        cover.hei = 100;
        cover.src = this._path;
        cover.elm.node = this;
        this.addChild(cover);      
    }

    _initlabel(){
        var label = new Label(this.text, {variant:"bold", style:"italic ", font:"Comic sans MS", size:"125%", color:"red"});
        label.elm.node = this;
        label.x = 40;
        label.y = 30;
        this.addChild(label);
    }
    
}