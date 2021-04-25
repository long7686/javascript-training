import {Game} from "./Modules/Game.js"
import {Sprite} from "./Libs/InitSprite.js"
import {MenuStart} from "./Modules/MenuStart.js"
import {Option} from "./Modules/MenuOption.js"
import {Audio} from "./Libs/InitAudio.js"

var game = new Game();
var bg = new Sprite("./img/trucxanh_bg.jpg");
var menuStart = new MenuStart();
var menuOption = new Option();
var flagStart = true;
var themeMusic = new Audio("./Audio/theme.mp3")

themeMusic.elm.loop = true
document.body.appendChild(themeMusic.elm)
document.body.appendChild(bg.elm);
document.body.appendChild(game.elm);
document.body.appendChild(menuStart.elm);
document.body.appendChild(menuOption.elm);

menuStart._init();
menuOption._init();
game._initAudio();

game.active = false;
menuOption.active = false;
menuStart.active = true


export function StartGame(){
    
    menuStart.active = false;
    game.active = true;
    if (flagStart){
        game._init();
        flagStart = false;
        menuStart.Continous();
    }
    else{
        if (confirm("Do you want to start New Game")){
            resetGame()
        }
        else {
            menuStart.active = true;
            game.active = false;
        }
    }
    game.clickSound.elm.play();
}

export function ResumeGame(){
    game.clickSound.elm.play();
    menuStart.active = false;
    game.active = true;
}


export function ExitGame(){
    if (confirm("Do you want to exit")){
        game.active = false;
        menuOption.active = false;
        menuStart.active = false;
        bg.active = false;
        themeMusic.elm.pause();
    }
    else {
        game.active = false;
        menuOption.active = false;
        menuStart.active = true;
          
    }
}

export function BackGame(){
    game.clickSound.elm.play();
    menuStart.active = true;
    menuOption.active = false;
    game.active = false;
}

export function OptionGame(){
    game.clickSound.elm.play();
    menuStart.active = false;
    menuOption.active = true;
}

export function resetGame(){
    game.cardList = [];
    game.imageList = [];
    game.countClick = 0;
    game.arrCheckImage = [];
    game.arrCheckCover = [];
    game.winList = [];
    game.onClickCard(null);
    while (game.elm.firstChild) {
        game.elm.removeChild(game.elm.firstChild);
    }
    game._init();
    game.clickSound.elm.play();
}

export function changeVolume(sliderValue){
    themeMusic.elm.play()
    themeMusic.elm.volume = sliderValue/100
}

export function changeSound(silderValue){
    game.clickSound.elm.volume = silderValue/100
    game.soundCard.elm.volume = silderValue/100
    game.Correct.elm.volume = silderValue/100
}



