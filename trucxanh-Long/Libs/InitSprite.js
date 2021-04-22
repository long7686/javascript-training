import {Node} from "./InitNode.js"
export class Sprite extends Node{
    constructor(path){
        super();
        this._path;
        if (path)   this.path = path;
    }

    _initElement(){
        this.elm = document.createElement('img');
        this.elm.style.position = 'absolute';
    }
    
    get path(){
        return this._path;
    }
    set path(value){
        this._path = value;
        this.elm.src = this._path;
    }
}