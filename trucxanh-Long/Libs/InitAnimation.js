import {Node} from "./InitNode.js";
export class Animation extends Node{
    constructor(){
        super()
        this.tl = gsap.timeline();
        this.obj;
    }

    cardSufferAnimation(object, obj){
        this.obj = object;
        this.tl.to(object, 0.1, {
            x: (obj.x), 
            y: (obj.y),
            pointEvent: "auto", 
            ease: "back.out(2)",})
    }

    cardSufferAnimation2(object, obj){
        this.obj = object;
        this.tl.to(object, 1, {
            x: (obj.x) , 
            y: (obj.y) ,
            pointEvent: "auto",
            ease: "back.out(2)",}).startTime(.1)
    }

    imageDown(object){
        this.tl.to(object, {duration: 0, scaleX: 0});   
    }

    flipUp(obj){
        this.tl.to(obj, {duration: 0.5, scaleX: 1})
    }

    flipDown(obj){
        this.tl.to(obj, {duration: 0.5, scaleX: 0});
    }

    cardCorrect(obj){
        this.tl.to(obj, 0.7, {scaleX:2, hei:150, opacity: 0.5}); 
    }
} 