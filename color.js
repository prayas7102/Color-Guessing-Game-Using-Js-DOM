// Firebase App (the core Firebase SDK) is always required and must be listed first
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

console.log(firebase);
var square=document.querySelectorAll("#square");
var rgb=document.querySelector("#rgb");
var result=document.querySelector("#result");
var l=document.querySelector("#l");
var h1=document.querySelector("h1");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var mode=document.querySelectorAll(".mode");
var n=0;


easybtn.addEventListener("click",function(){
hardbtn.classList.remove("bg");
result.textContent="Start!";
h1.style.background="steelblue";
	easybtn.classList.add("bg");
	colors=generate(3);
	pickedcolor=lpico(colors);
    rgb.textContent=pickedcolor;
    form(colors);
    for (var i=3;i<square.length;i++)
    {square[i].style.background="none";
    }
    s(square,colors,pickedcolor);
});


hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("bg");
result.textContent="Start!";
h1.style.background="steelblue";
	hardbtn.classList.add("bg");
	colors=generate(6);
	pickedcolor=lpico(colors);
    rgb.textContent=pickedcolor;
    form(colors);
    for (var i=0;i<square.length;i++)
    {square[i].style.background=colors[i];
    }
   
});
function generate(n)
{
	l.style.background="none";

colors=[];
if (n==6){
for (var i = 0; i<6; i++) 
{
   colors.push(randomc());
}
return colors;
}
else{
for (var i = 0; i<3; i++) 
{
   colors.push(randomc());
}
return colors;	
}
}
function randomc()
{
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb("+r+", " + g+", " +b+")";
}

var colors=[];
for (var i = 0; i<6; i++) 
{
   colors.push(randomc());
}
var pickedcolor=lpico(colors);
rgb.textContent=pickedcolor;
for (var i = 0; i<square.length; i++)
{
	square[i].style.background=colors[i];


	square[i].addEventListener("click",function()
	{
	var	clickedcolor=this.style.background;
	if (pickedcolor===clickedcolor)
	{

		for (var j = 0; j < square.length; j++)
		{
			square[j].style.background=pickedcolor;
		}
		
		result.textContent="Correct!";
		l.textContent="Play Again";
		h1.style.background=pickedcolor;
	}
	
	else{
		result.textContent="Try Again";	
		this.style.background="#232323";
	}
	});
}
function h(colors,n)
{
	pickedcolor=lpico(colors);
    rgb.textContent=pickedcolor;
	for(var i=0;i<n;i++)
	{ 

		square[i].addEventListener("click",function()
	{
	var	clickedcolor=this.style.background;

	if (pickedcolor===clickedcolor)
	{

		for (var j = 0; j < n; j++)
		{
			square[j].style.background=pickedcolor;
		}
		
		result.textContent="Correct!";
		l.textContent="Play Again";
		h1.style.background=pickedcolor;
	}
	
	else{
		result.textContent="Try Again";	
		this.style.background="#232323";
	}
	});
}
}
function form(colors)
{
	for (var i = 0; i<square.length; i++)
{
	square[i].style.background=colors[i];
	
}

}
function lpico(colors){

	var rand=Math.floor(Math.random()*colors.length);
	return colors[rand];
}
l.addEventListener("click",function()
{
	result.textContent="";
	easybtn.classList.remove("bg");
l.textContent="Reset";
h1.style.background="steelblue";
	l.classList.add("bg");
var colors=generate(6);
form (colors);
h (colors,square.length);
});	