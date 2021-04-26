import {Node} from "../Libs/InitNode.js";
import {Sprite} from "../Libs/InitSprite.js";
import {Card} from "./Card.js";
import {Label} from "../Libs/InitLabel.js"
import {Button} from "../Libs/InitButton.js"
import {BackGame} from "../Main.js"
import {resetGame} from "../Main.js"
import {Audio} from "../Libs/InitAudio.js"
import {Animation} from "../Libs/InitAnimation.js"
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
        var cardFlip = new Audio("./Audio/CardFlip.mp3");
        this.soundCard = cardFlip;

        var click = new Audio("./Audio/Click.mp3");
        this.clickSound = click;

        var corr = new Audio("./Audio/Correct.mp3");
        this.Correct = corr;
        
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
        loseLabel.x = 50;
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
        let tl = new Animation();
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
                tl.imageDown(image);
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
        let text = 1;
        let index = -1;
        for (let i = 1; i < 21; i++){
            var card = new Card(text ,"./img/cover.jpg")
                card._init();
                card.elm.style.zIndex = 20 - text;
                card.wid = 100;
                this.addChild(card);
                this.cardList =  this.cardList.concat(card);
                card.elm.style.pointerEvents = "none";
                card.on("mousedown", this.onClickCard.bind(this));
                card.on("mouseenter", card.onMouseIn.bind(card));
                card.on("mouseleave", card.onMouseOut.bind(card));
                text++;
        }
        for (let i = 0; i < row; i++){  
            for (let j = 0; j < col; j++){
                index++ ;
                let tl = new Animation()
                card.y = i * (card.hei +100) + padY;
                card.x = j * card.wid + padX;
                tl.cardSufferAnimation(this.cardList[index], card,index);
            }
        }      
    } 
    
    onClickCard(event){
        let tl = new Animation();
        if (event){ 
            event.target.node.elm.style.pointerEvents = "none";
            setTimeout(function(){
                event.target.node.elm.style.pointerEvents = "auto";
            },500);    
            if (this.countClick < 2){
                this.soundCard.elm.play()
                let image = this.imageList[this.cardList.indexOf(event.target.node)];
                tl.flipDown(event.target.node)
                tl.flipUp(image)
                this.arrCheckCover.push(event.target.node);
                this.arrCheckImage.push(image);
                this.countClick++;
                
                if(this.arrCheckImage.length == 2){
                    if(this.arrCheckImage[0].elm.src === this.arrCheckImage[1].elm.src){
                        this.arrCheckImage[0].elm.style.zIndex = "30";
                        this.arrCheckImage[1].elm.style.zIndex = "30";
                        tl.cardCorrect(this.arrCheckImage)
                        this.winList.push(this.arrCheckImage[0].elm.src,this.arrCheckImage[0].elm.src);
            
                        if (this.winList.length === 20){
                            setTimeout(function(game){
                                tl.scoreChange(game, 10);
                                game._winLabel.active = true;
                            },1500, this); 
                        }
                        setTimeout(function(game){
                            tl.scoreChange(game, 10);
                            if ((game.arrCheckImage[0] != null) || (game.arrCheckImage[1] != null)){
                                game.arrCheckImage[0].active = false;
                                game.arrCheckImage[1].active = false;
                                game.arrCheckCover = [];
                                game.arrCheckImage = [];
                                game.countClick = 0; 
                                game.Correct.elm.load()
                                game.Correct.elm.play()
                            }
                            
                        },1500, this);
                    }
                    else{
                        tl.flipDown(this.arrCheckImage)
                        tl.flipUp(this.arrCheckCover)
                        this.arrCheckCover = [];
                        this.arrCheckImage = [];
                        
                        if(this._score.elm.innerHTML <= 10){
                            setTimeout(function(game){ 
                                tl.scoreChange(game, -10);
                                game._loseLabel.active = true;
                            },1500, this);
                        }
                        else{ 
                            setTimeout(function(game){ 
                                tl.scoreChange(game, -10);
                                game.countClick = 0;
                            },1500, this);
                        }
                    }      
                }
            }
        }       
    }
}
