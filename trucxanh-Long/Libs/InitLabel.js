import {Node} from "./InitNode.js";
export class Label extends Node{
    constructor(text, styleText){
        super();
        this._text;
        this._style;
        if (text)   this.text = text;
        if (styleText)   this.styleText = styleText;
    }

    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = 'absolute';
    }

    get text(){
        return this._text;
    }
    set text(value){
        this._text = value;
        this.elm.innerHTML = this._text;
    }

    get styleText(){
        return this._styleText;
    }
    set styleText(value){
        this._font = value.font;
        this._size = value.size;
        this._color = value.color;
        this._variant = value.variant;
        this._style = value.style;
        this.elm.style.font = `${this._style} ${this._variant} ${this._size} ${this._font}`;
        this.elm.style.color = this._color;

    }
}