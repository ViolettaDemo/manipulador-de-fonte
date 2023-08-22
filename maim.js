var pusodireitoX=0;
var pusodiesquerdoX=0;
var diferenca=0;
function preload(){}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(550,150);
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("modelo caregado");
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        pusodireitoX=results [0].pose.rightWrist.x;
        pusodiesquerdoX=results [0].pose.leftWrist.x;
        diferenca=floor(pusodiesquerdoX-pusodireitoX);
    }
}
function draw(){
    background("purple");
    textSize(diferenca);
    fill("White");
    text("violetta",50, 400);
}

