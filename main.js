s1="";
s2="";
function preload(){
    s1=loadSound("music.mp3");
    s2=loadSound("music2.mp3");

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(600,500);
    video.hide();


}

function draw(){
    image(video,0,0,600,500);
}