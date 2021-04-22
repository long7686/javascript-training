import {Node} from "./InitNode.js"
export class Audio extends Node {
    constructor(path){
        super();
        this._path;
        this._volume;
        if (path)   this.path = path
    }
    _initElement(){
        this.elm = document.createElement('AUDIO');
    }

    get path(){
        return this._part;
    }
    set path(value){
        this._path = value;
        this.elm.src = this._path;
    }
    
    get volume(){
        return this._volume;
    }
    set volume(value){
        this._volume = value;
        this.elm.volume = this._volume;
    }

}