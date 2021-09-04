song=""
scoreRightWrist=0;
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
LeftWristX=0;
LeftWristY=0;



function preload(){
    song=loadSound("music.mp3, music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
    
}

function modelloaded(){
    console.log("poseNet is intialized")
}

function gotposes(){
    console.log("working upon gotposes")
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    music.mp3.play();
}

function stop(){
    music.mp3.stop();
}

function play(){
    music.mp3.play();
}

function stop(){
    music.mp3.stop();
}