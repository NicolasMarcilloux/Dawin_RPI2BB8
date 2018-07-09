var sphero = require("sphero"),
bb8 = sphero("DD:3F:27:D5:69:EE");

bb8.connect(function(){
  setTimeout(function(){
    // var direction = Math.floor(Math.random() * 360);
    // bb8.roll(150, direction);
    orb.color("blue");
  }, 100);

})
