import {Node} from "./InitNode.js"
export class Animation extends Node{
    constructor(){ 
        super()
        this.tl = gsap.timeline();
        this.obj;
    }

    cardSufferAnimation(object, obj, index){
        this.obj = object;     
        this.tl.fromTo(object,{x:450,y:180}, {
            duration:0.5,
            delay:index/10,
            x: (obj.x), 
            y: (obj.y),
            pointEvent: "auto", 
            ease: "back.out(2)",
        })
        
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

    scoreChange(game, number){
        var firstVal = Number(game._score.elm.innerHTML);
        var Cont = {val:firstVal};
        var nextVal = firstVal + number;
        TweenLite.to(Cont,1,{
            val:nextVal,
            roundProps:{val:1},
            onUpdate: function(){
                game._score.elm.innerHTML = Cont.val;
            }
        })
    }
} 