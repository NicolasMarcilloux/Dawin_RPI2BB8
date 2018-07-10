var sphero = require("sphero"),
bb8 = sphero("DD:3F:27:D5:69:EE");



function bb8Action(action){

  switch (action) {
    case "MoveUp":
      setInterval(function() {
        bb8.roll(150, 0);
      }, 1000);
      break;

    case "MoveDown":
      setInterval(function() {
        bb8.roll(150, 180);
      }, 1000);
      break;

    case "MoveRight":
      setInterval(function() {
        bb8.roll(150, 90);
      }, 1000);
        break;

    case "MoveLeft":
      setInterval(function() {
        bb8.roll(150, 270);
      }, 1000);
      break;

    case "Color":
      break;

    case "SetupOn":
      bb8.startCalibration();
      break;

    case "SetupOf":
      bb8.finishCalibration();
      break;
  }

}

bb8.connect(function(){
  bb8.detectCollisions();
  bb8Action("SetupOn");
})
