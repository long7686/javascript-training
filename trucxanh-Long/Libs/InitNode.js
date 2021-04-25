export class Node{
    constructor(){
        this._initElement();
        this._x = 0;
        this._y = 0;
        this._wid = 0;
        this._hei = 0;
        this._scaleX = 1;
        this._scaleY = 1;
        this._opacity = 1;
        this._nodes = [];
        this._active = true;
        this._pointEvent;
    }

    _initElement(){
        this.elm = document.createElement('div');
        this.elm.style.position = 'relative';
        this.elm.node = this;
    }

    _initElementInput(){
        this.elm = document.createElement('Input');
        this.elm.style.position = 'absolute';
        this.elm.node = this;
    }

    get x(){
        return this._x;
    }
    set x(value){
        this._x = value;
        this.elm.style.left = this._x + "px";
    }

    get y(){
        return this._y;
    }
    set y(value){
        this._y = value;
        this.elm.style.top = this._y + "px";
    }

    get wid(){
        return this._wid;
    }
    set wid(value){
        this._wid = value;
        this.elm.style.width = this._wid + "px";
    }

    get hei(){
        return this._hei;
    }
    set hei(value){
        this._hei = value;
        this.elm.style.height = this._hei + "px";
    }

    get scaleX(){
        return this._scaleX;
    }
    set scaleX(value){
        this._scaleX = value;
        this.elm.style.transform = `scaleX(${this._scaleX})`;
    }

    get scaleY(){
        return this._scaleY;
    }
    set scaleY(value){
        this._scaleY = value;
        this.elm.style.transform = `scaleY(${this._scaleY})`;
    }

    get opacity(){
        return this._opacity;
    }
    set opacity(value){
        this._opacity = value;
        this.elm.style.opacity = this._opacity;
        
    }
    
    get pointEvent(){
        return this._pointEvent;
    }
    set pointEvent(value){
        this._pointEvent = value;
        this.elm.style.pointerEvents = this._pointEvent;
    }

    get active(){
        return this._active;
    }
    set active(value) {
        this._active = value;
        this.elm.style.display = this._active ? "block" : "none";
    }

    addChild(node){
        this.elm.appendChild(node.elm);
        this._nodes.push(node);
    }

    on(event, listener){
        this.elm.addEventListener(event, listener);
    }
}