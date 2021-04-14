//Bai1 String
function formatMoney(money){
    var myMoney = '';
    var countMoney;
    if (money.includes(".")){
        var dotIndex = money.indexOf(".");
        var arrMoney = money.split(".");
        var valueMoney = Math.floor(arrMoney[0].length / 3);
        var amountFirstNum = arrMoney[0].length % 3;
        if (amountFirstNum === 0){
            amountFirstNum = 3;
            valueMoney--;
        }
    myMoney = money.substr(0, amountFirstNum);
    for (i = amountFirstNum; i < dotIndex;i+=3 ){
        myMoney += "," + money.substr(i, 3)
    }
    myMoney += money.substring(dotIndex)

    }
    else{
        var valueMoney = Math.floor(money.length / 3);
        if (money.lengthh %3 === 0){
            valueMoney--;
        }
        myMoney = myMoney.concat(money.substr(0, valueMoney))
        for (i = valueMoney; i < money.length; i +=3){
            myMoney = myMoney.concat(",", money.substr(i,3))
        }
    }
    return console.log(myMoney)
}
formatMoney("12000.02")


//Bai2 String
function formatInShorten(money, num){
    var myMoney = '';       //tien sau khi da duoc chuyen doi
    var char = '';
    var numAfterDot = '';       //ky tu phia sau dau "."
    var numBeforeDot = '';      //ky tu phia truoc dau "."
    var countDot = Math.floor(money.length/3);
    var beforeDot = money.length % 3;       // so luong ky tu phia truoc dau "."
    if (beforeDot===0){
        beforeDot = 3;
        countDot--;
    } 
    if (num > money.length-beforeDot) num = money.length-beforeDot; // dieu kien cua num
    if(countDot === 0){
        myMoney = money;
        num = 0;
    } 
    else if (countDot === 1) char = "K"
    else if (countDot === 2) char = "M"
    else if (countDot === 3) char = "B" 


    for (i = 0; i <= beforeDot -1; i++){        //tim gia tri numBeforeDot
        numBeforeDot += money[i]
    }

    for (i = beforeDot; i < num + beforeDot; i++){         //tim gia tri numAfterDot
        numAfterDot += money[i]
    }
    while (numAfterDot.endsWith("0")){
        numAfterDot = numAfterDot.substr(0, numAfterDot.length -1)
    }

    myMoney = numBeforeDot +"."+ numAfterDot + char
    if(myMoney.endsWith("."+char)){
        myMoney = numBeforeDot + numAfterDot + char
    }
   return console.log(myMoney)
}
formatInShorten('1342222', 10)


//Bai3 String
function countWords(str){
    var count = 0;
    for (i = 0; i <= str.length - 1; i++){
        if(str[i].toUpperCase() === str[i]){
            count++;
        }
    }
    if (count === 0){
        count = 1;
    }
    else{
        count++;
    }  
    return console.log(count)
}
countWords("oneTwoThreeFourFive")


//Bai4 String
function getExtension(fileName){
    var _extension = '';
    var dotIndex = fileName.indexOf('.')
    _extension = _extension.concat(fileName.slice([dotIndex+1]))
    return console.log(_extension)
}

getExtension('Sound.mp3')
