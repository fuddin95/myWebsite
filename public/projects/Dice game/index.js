
/*
------------------Angela's Solution----------------
//dice 1 chainging
var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;
 
var image1 = document.querySelector(".img1");

image1.setAttribute("src",randomImageSource);

//changing dice 2 
var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎈🎈🎈Player 1 Won";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="2 Player Won🎈🎈🎈";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!😁";
}
*/
var randomNumber1=Math.floor(Math.random() * 6) + 1;

/*
function dicePicker(n){
    if(randomNumber1=="1"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice"+num+".png");
    }
    else if(randomNumber1=="2"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice2.png");
    }
    else if(randomNumber1=="3"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice3.png");
    }
    else if(randomNumber1=="4"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice4.png");
    }
    else if(randomNumber1=="5"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice5.png");
    }
    else if(randomNumber1=="6"){
        document.querySelectorAll("img")[n].setAttribute("src","images/dice6.png");
    }
}
dicePicker(0);
*/
var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomNumber2=Math.floor(Math.random() * 6) + 1;
function dicePicker(num,n){
    document.querySelectorAll("img")[n].setAttribute("src","images/dice"+num+".png");
}
dicePicker(randomNumber1,0);
dicePicker(randomNumber2,1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎈🎈Player 1 Won";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="2 Player Won🎈🎈";
}
else{
    document.querySelector("h1").innerHTML="Draw!😁";
}