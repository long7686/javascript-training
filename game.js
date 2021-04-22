function Game_Truc_xanh(){
    var imageSrcArr = [];
    var imagesArr = [];
    var coverArr = [];
    var coverArr2 = [];
    var correctCount = 0;
    var row = 4;
    var col = 5;
    var padX = 150;
    var padY = -75;
    var image_wid = 100;
    var image_hei = 100;
    var index = 0;
    var clickCount = 0;
    var imageIndex1, imageIndex2;


    for (i = 0; i <= 9; i++){
        var imageSrc ="./img/trucxanh"+i+".jpg";
        imageSrcArr = imageSrcArr.concat(imageSrc);
    }

    imageSrcArr += "," +imageSrcArr;
    imageSrcArr = imageSrcArr.split(",");

    const game = document.createElement("div");
    document.body.appendChild(game);
    game.style.position = "relative";

    var bg = document.createElement("img");
    bg.src = "./img/trucxanh_bg.jpg";
    bg.style.position = "absolute";
    bg.style.top = 100 + "px";
    bg.style.left = 250 + "px"
    game.appendChild(bg);

    const txt_Score = document.createElement("div");
    txt_Score.innerHTML = "Score";
    txt_Score.style.position = "absolute";
    txt_Score.style.top = "250px";
    txt_Score.style.left = "300px";
    txt_Score.style.color = "red";
    txt_Score.style.font = "italic bold 50px sans,serif"
    game.appendChild(txt_Score);

    const txt_Num = document.createElement("div");
    txt_Num.innerHTML = "100";
    txt_Num.style.position = "absolute";
    txt_Num.style.top = "300px";
    txt_Num.style.left = "320px";
    txt_Num.style.color = "red";
    txt_Num.style.font = "italic bold 50px sans,serif"
    game.appendChild(txt_Num);


    function randomImage(array) {
        var currentIndex = array.length; 
        var temporaryValue, randomIndex;
        while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    }
    randomImage(imageSrcArr)


    function createCover(Src, wid, hei, top, left){
        var cover = document.createElement("img");
        cover.src = Src;
        cover.style.position = "absolute"
        cover.style.width = wid + "px";
        cover.style.height = hei + "px";
        cover.style.top = top  + 100 + "px";
        cover.style.left = left + 250+ "px";
        cover.addEventListener("click", function(){
            if (clickCount === 2){
                cover.style.visibility = "visible";
                clickController(cover)
            }
            else cover.style.visibility = "hidden"
            clickController(cover)
        })
        game.appendChild(cover);
        return cover
    }
    function createImage(Src, wid, hei, top, left){
        var image = document.createElement("img");
        image.src = Src;
        image.style.position = "absolute"
        image.style.width = wid + "px";
        image.style.height = hei + "px";
        image.style.top = top  + 100 + "px";
        image.style.left = left + 250+ "px";
        game.appendChild(image);
        return image
    }


    for (i = 1; i <= col; i++){
        var image_left = i * image_wid + padX;
        for (j = 1; j <= row; j++){
            var image_top = j*image_hei + padY;
            var images = createImage(imageSrcArr[index], image_wid, image_hei, image_top, image_left)
            images.id = index;
            imagesArr.push(images); 
            index++
        }
    }

    for (i = 1; i <= col; i++){
        var cover_left = i * image_wid + padX;
        for (j = 1; j <= row; j++){
            var cover_top = j*image_hei + padY;
            var cover = createCover("./img/photo_2021-04-15_13-48-46.jpg", image_wid, image_hei, cover_top, cover_left ,clickCount)
            coverArr.push(cover)
        }
    }

    function clickController(cover) {
        if (clickCount < 1 )  {
            clickCount++;
            coverArr2.push(cover)
            imageIndex1 = coverArr.indexOf(cover)
        }  
        else if (clickCount === 1){
            coverArr2.push(cover);
            clickCount = 2;
            imageIndex2 = coverArr.indexOf(cover)
            if(imagesArr[imageIndex1].src === imagesArr[imageIndex2].src){
                correctCount++;
                console.log(correctCount)
                
                setTimeout(function(){
                    if(correctCount === 10){
                        gameOver();
                    }
                    imagesArr[imageIndex1].style.visibility = "hidden";
                    imagesArr[imageIndex2].style.visibility = "hidden";
                    txt_Num.innerHTML = Number(txt_Num.innerHTML) + 10;
                    coverArr2.splice(0,2);
                    clickCount = 0;
                },500);           
            }
            else{
                txt_Num.innerHTML = Number(txt_Num.innerHTML) - 10;
                setTimeout(function(){
                    if (txt_Num.innerHTML === "0"){;
                        gameOver();
                    }
                    coverArr2[0].style.visibility = "visible";
                    coverArr2[1].style.visibility = "visible"
                    coverArr2.splice(0,2);
                    clickCount = 0;
                },1000); 
            }     
        } 
    }

    function gameOver(){
        if (correctCount === 10)   alert("You Win!!!");
        else{
            // txt_Num.innerHTML = '0';
            alert("You Lose!!!");
        } 
        if (confirm("Do you want to play again")) {
            Game_Truc_xanh();
          } else {
            game.style.display = "none";
          }
    }
}
Game_Truc_xanh()