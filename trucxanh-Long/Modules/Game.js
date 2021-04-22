import {Node} from "../Libs/InitNode.js";
import {Sprite} from "../Libs/InitSprite.js"
import {Card} from "./Card.js";
import {Label} from "../Libs/InitLabel.js"
import {Button} from "../Libs/InitButton.js"
import {BackGame} from "../Main.js"
import {resetGame} from "../Main.js"
import {Audio} from "../Libs/InitAudio.js"
export class Game extends Node {
    constructor(){
        super();
        this.cardList = [];
        this.imageList = [];
        this.arrCheckImage = [];
        this.arrCheckCover = [];
        this.winList =[];
        this.countClick = 0;
        this._score;
        this._winLabel;
        this._loseLabel;
        this.soundCard;
        this.clickSound;
        this.cardSuff;
        this.Correct;
    }

    _init(){
        this._initImages();
        this._initCard();
        this._initScore();
        this.onClickCard();
        this._initButton();
    }

    _initAudio(){
        var card = new Audio("./Audio/CardSuffer.mp3");
        this.soundCard = card;
        this.addChild(card);

        var click = new Audio("./Audio/Click.mp3");
        this.clickSound = click;
        this.addChild(click);

        var cardSuffer = new Audio("./Audio/Dealingcards.mp3");
        this.cardSuff = cardSuffer;
        this.addChild(cardSuffer);

        var corr = new Audio("./Audio/Correct.mp3");
        this.Correct = corr;
        this.addChild(corr);
        
    }

    _initScore(){
        var scoreLabel = new Label("SCORE" , {variant:"bold", style:"italic", 
        font:"Comic sans MS", size:"200%", color:"red"});
        var score = new Label("100" , {variant:"bold", style:"italic", font:"Comic sans MS", size:"200%", color:"red"});
        var winLabel = new Label("Congratulations, You Win!!!" , {variant:"bold", style:"italic", font:"Comic sans MS", size:"200%", color:"red"});
        winLabel.elm.style.zIndex = "1"
        var loseLabel = new Label("You Lose!!!" , {variant:"bold", style:"italic", font:"Comic sans MS", size:"200%", color:"black"});
        scoreLabel.y = 80;
        scoreLabel.x = 60;
        score.y =120;
        score.x = 80;
        winLabel.y =200;
        winLabel.x = 250;
        loseLabel.y =200;
        loseLabel.x = 80;
        this._score = score;
        this._winLabel = winLabel;
        this._loseLabel = loseLabel;
        this.addChild(scoreLabel);
        this.addChild(score);
        this.addChild(winLabel);
        this.addChild(loseLabel);
        this._winLabel.active = false;
        this._loseLabel.active = false;   
    }
    
    _initButton(){
        var bnt_Reset = new Button("Reset", "./img/buttonImage.png");
        bnt_Reset._init();
        bnt_Reset.positionX = 30;
        bnt_Reset.positionY = 300;
        bnt_Reset.on("mouseenter", () => bnt_Reset.onMouse());
        bnt_Reset.on("mouseleave", () => bnt_Reset.offMouse());
        bnt_Reset.on("mousedown",  () => resetGame());
        this.addChild(bnt_Reset);

        var bnt_Back = new Button("Back", "./img/buttonImage.png");
        bnt_Back._init();
        bnt_Back.positionX = 30;
        bnt_Back.positionY = 380;
        bnt_Back.on("mouseenter", () => bnt_Back.onMouse());
        bnt_Back.on("mouseleave", () => bnt_Back.offMouse());
        bnt_Back.on("mousedown",  () => BackGame());
        this.addChild(bnt_Back);
    }

    _initImages(){
        let timeline = gsap.timeline();
        let arrImage = [];
        let col = 5;
        let row = 4;
        let index = 0;
        let padX = 250;
        let padY = 40;
        for(let i = 0; i <=9; i++){
            let src = "./img/trucxanh"+ i +".jpg"
            arrImage.push(src, src);   
        }

        arrImage.sort(() => Math.random() - 0.5);

        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++){
                var image = new Sprite(arrImage[index]);
                timeline.to(image, {duration: 0, scaleX: 0});
                image.wid = 100;
                image.hei = 100;
                image.y = i * image.hei + padY;
                image.x = j * image.wid + padX;
                index++;
                this.imageList.push(image);
                this.addChild(image);
            }
        }
    }

    _initCard(){
        let col = 5;
        let row = 4;
        let padX = 250;
        let padY = 40;
        let text = 20;
        let index = 20;
        let timeline = gsap.timeline();
        for (let i = 0; i <= 19; i++){
            var card = new Card(text ,"./img/cover.jpg")
                card.y = 180;
                card.x = 65;
                card._init();
                card.wid = 100;
                this.addChild(card);
                this.cardList =  this.cardList.concat(card);
                card.elm.style.pointerEvents = "none";
                card.on("mousedown", this.onClickCard.bind(this));
                text--;
        }
        for (let i = 0; i < row; i++){  
            for (let j = 0; j < col; j++){
                this.cardSuff.elm.play()
                card.y = i * (card.hei +100) + padY;
                card.x = j * card.wid + padX;
                timeline.to(this.cardList[index-1], 0.2, {
                    x:card.x, 
                    y:card.y, 
                    pointEvent: "auto"});
                index--
               
            }
        }    
        setTimeout(function(game){
            game.cardSuff.elm.load();
            },4000,this)
    }
    
    onClickCard(event){
        let timeline = gsap.timeline();
        if (event){ 
            event.target.node.elm.style.pointerEvents = "none";
            setTimeout(function(){
                event.target.node.elm.style.pointerEvents = "auto";
            },500);    
            if (this.countClick < 2){
                this.soundCard.elm.play()
                let image = this.imageList[19-this.cardList.indexOf(event.target.node)];
                timeline.to(event.target.node, {duration: 0.5, scaleX: 0});
                timeline.to(image, {duration: 0.5, scaleX: 1});
                this.arrCheckCover.push(event.target.node);
                this.arrCheckImage.push(image);
                this.countClick++;
                
                if(this.arrCheckImage.length == 2){
                    if(this.arrCheckImage[0].elm.src === this.arrCheckImage[1].elm.src){
                        this.arrCheckImage[0].elm.style.zIndex = "1";
                        this.arrCheckImage[1].elm.style.zIndex = "1";
                        timeline.to(this.arrCheckImage, 0.7, {scaleX:2, hei:150, opacity: 0.5});
                        this.Correct.elm.load()
                        this.Correct.elm.play()
                        this.winList.push(this.arrCheckImage[0].elm.src,this.arrCheckImage[0].elm.src);
                        
                        if (this.winList.length === 20){
                            setTimeout(function(game){
                                game._score.elm.innerHTML = Number(game._score.elm.innerHTML) + 10;
                                game._winLabel.active = true;
                            },1500, this); 
                        }
                        setTimeout(function(game){
                            game._score.elm.innerHTML = Number(game._score.elm.innerHTML) + 10;
                            game.arrCheckImage[0].active = false;
                            game.arrCheckImage[1].active = false;
                            game.arrCheckCover = [];
                            game.arrCheckImage = [];
                            game.countClick = 0; 
                        },1500, this);
                    }
                    else{
                        timeline.to(this.arrCheckImage, {duration: 0.5, scaleX: 0});
                        timeline.to(this.arrCheckCover, {duration: 0.5, scaleX: 1});
                        this.arrCheckCover = [];
                        this.arrCheckImage = [];
                        
                        if(this._score.elm.innerHTML == 10){
                            setTimeout(function(game){ 
                                game._score.elm.innerHTML = Number(game._score.elm.innerHTML) - 10;
                                game._loseLabel.active = true;
                                
                            },1600, this);
                        }
                        else{ 
                            setTimeout(function(game){ 
                                game._score.elm.innerHTML = Number(game._score.elm.innerHTML) - 10;
                                game.countClick = 0;
                            },1600, this);
                        }
                    }      
                }
            }
        }       
    }
}
