// 'use strict';

$(document).ready(function whenLoaded(){
  console.log("here!");
  // Your jQuery here
  // 1. Get the value "Hello There".
  var helloThere = $("#greeting");
  // 2. Change (or set) the value to "Hola".
  helloThere.text("Hola");
  // 3. Add an h1 to the page that says "A Spanish Greeting".
$(".row").before("<h1>A Spanish Greeting</h1>");
  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
$(".row").append('<div class="col-sm-6"><div id="greeting1">Que tal?</div></div>')
  // 5. Add the class "blue" to both greetings.
$(".col-sm-6>div").attr("class", "blue");
});
