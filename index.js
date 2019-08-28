
var randomNumber1 =Math.floor( Math.random() *6 ) + 1;
var randomNumber2 =Math.floor( Math.random() *6 ) + 1;

var randomImg = "dice"+randomNumber1+".png";

var imgSource = "images/"+randomImg;

var randomImg1 = "dice"+randomNumber2+".png";

var imgSource1 = "images/"+randomImg1;


var b = document.querySelectorAll("img")[0];
b.setAttribute("src",imgSource);

var b = document.querySelectorAll("img")[1];
b.setAttribute("src",imgSource1);



if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Won";
}

else{
  document.querySelector("h1").innerHTML="Player 2 Won";
}
