 nose_x=0
 nose_y=0

function preload()
{
 clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")  
}

function setup()
{
    canvas=createCanvas(600,600)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log("POSENET IS INTIALIZED");
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results)
        nose_x=results [0].pose.nose.x
        nose_y=results [0].pose.nose.y
    }
}

function draw()
{
    image(video,0,0,600,600);
    fill("red")
    //circle(nose_x-10,nose_y+60,40);
    image(clown_nose,nose_x-70,nose_y+70,100,100);
}
