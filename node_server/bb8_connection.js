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

      break;

    case "MoveRight":

      break;

    case "MoveLeft":

      break;

    case "Color":

      break;

    case "Setup":

      break;

  }

}

bb8.connect(function(){
  bb8.detectCollisions();
  bb8Action("MoveUp");
})
