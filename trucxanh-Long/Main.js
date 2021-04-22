import {Game} from "./Modules/Game.js"
import {Sprite} from "./Libs/InitSprite.js"
import {MenuStart} from "./Modules/MenuStart.js"
import {Option} from "./Modules/MenuOption.js"


var game = new Game();
var bg = new Sprite("./img/trucxanh_bg.jpg");
var menuStart = new MenuStart();
var menuOption = new Option();
var flagStart = true;
document.body.appendChild(bg.elm);
document.body.appendChild(game.elm);
document.body.appendChild(menuStart.elm);
document.body.appendChild(menuOption.elm);

menuStart._init();
menuOption._init();

game.active = false;
menuOption.active = false;
menuStart.active = true


export function StartGame(){
    menuStart.active = false;
    game.active = true;
    if (flagStart){
        game._init();
        flagStart = false;
        menuStart._initResume();
    }
    else if (!flagStart){
        
    }
    game.resetGame();
}

export function ResumeGame(){
    menuStart.active = false;
    game.active = true;
}


export function ExitGame(){
    menuStart.active = false;
    bg.active = false;
}

export function BackGame(){
    menuStart.active = true;
    menuOption.active = false;
    game.active = false;
}

export function OptionGame(){
    menuStart.active = false;
    menuOption.active = true;
}




