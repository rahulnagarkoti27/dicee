var randomNumber1=(Math.floor(Math.random()*6))+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSorce="images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSorce);

var randomNumber2=(Math.floor(Math.random()*6))+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSorce2="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSorce2);

var res;
if(randomNumber1>randomNumber2)
{
    res="Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    res="Player 2 wins";
}
else{
    res="Draw";
}

document.querySelector("h1").innerHTML=res;