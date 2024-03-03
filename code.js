video = "";
results = "";
objects = [];
status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}


function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(objects[i].label == object_name) 
    {
      for (i=0; i < objects.length; i++) {
        document.getElementById("objects_status").innerHTML = object_name + "Found";
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}