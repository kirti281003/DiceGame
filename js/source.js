if(performance.navigation.type==performance.navigation.TYPE_RELOAD)
{

var a=Math.random();
var b=Math.floor(a*6)+1;
console.log(b);
if(b==1)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2>   <img src="/pictures/d1.webp">';
}
else if(b==2)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2> <img src="/pictures/d2.jpg">';
}
else if(b==3)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2>  <img src="/pictures/d3.jpg">';
}
else if(b==4)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2>  <img src="/pictures/d4.jpg">';
}
else if(b==5)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2>  <img src="/pictures/d5.png">';
}
else if(b==6)
{
    document.querySelector(".img-left").innerHTML='<h2>Player 1</h2>  <img src="/pictures/d6.jpg">';
}
var c=Math.random();
var d=Math.floor(c*6)+1;
console.log(d);
if(d==1)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>   <img src="/pictures/d1.webp">';
}
else if(d==2)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>   <img src="/pictures/d2.jpg">';
}
else if(d==3)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>   <img src="/pictures/d3.jpg">';
}
else if(d==4)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>   <img src="/pictures/d4.jpg">';
}
else if(d==5)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>    <img src="/pictures/d5.png">';
}
else if(d==6)
{
    document.querySelector(".img-right").innerHTML='<h2>Player 2</h2>    <img src="/pictures/d6.jpg">';
}
if(b>d)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(d>b){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}