document.body.style.backgroundColor ="black";
document.body.style.color="white";
document.body.style.position="relative";

function circle(color){
    document.getElementById("content").style.height ="150px";
    document.getElementById("content").style.width="150px";
    document.getElementById("content").style.position="absolute";
    document.getElementById("content").style.backgroundColor=color;
    //document.getElementById("content").style.display="inline-block";
    document.getElementById("content").style.borderRadius="50%";
}

// function circleShow(){
//     document.getElementById("content").style.display="inline-block";
// }

// function circleHide(){
//     document.getElementById("content").style.display="none";
// }


function screenSize(){
    //console.log(window.innerWidth+" x "+window.innerHeight);
    return [window.innerWidth, window.innerHeight]
}



circleColor = "white";

circle(circleColor);

setInterval(function(){

    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);

    circleColor="rgb("+r+","+g+","+b+")";

}, 20000)

setInterval(function(){

    circle(circleColor);

    [screenWith, screenHeight] = screenSize(); 
    x=Math.floor(Math.random() * screenWith);
    y=Math.floor(Math.random() * screenHeight);

    // console.log(x,y);
    
    document.getElementById("content").style.top=y+"px";
    document.getElementById("content").style.left=x+"px";


}, 10000)

