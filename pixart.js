// How do we start the homework?" The instructions start off with "When I click..." That's an indication that we should be doing something with a `click` event. We can't modify the HTML, so we'll have to use `addEventListener` to attach a `click` event to the button.
//
// The reason the instructions hint about `event.preventDefault()` is that the default `click` action for `<button></button>` is to reload the page (as if it was submitting a form). So the event listener you add to `<button>` won't work, because the page will be reloading.
//
// Finally, I really like putting all my JS in the `<head>`. However, that requires an `onload` attribute on `<body>`. The `<body>` in this HTML doesn't have `onload`, and we're not allowed to touch the HTML. So we'll need to rely on the fact that the JS has been included at the end of `<body>`.
//
// So your code should start off something like this:
// 1. Get the button element
// 2. Add a `click` event listener to it
// 3. Prevent the default `click` event from happening
// 4. Continue on to add the new stuff you want to happen (edited)
//
// <div class="controls">
//     <form id="form">
//       <input type="text" id="color-field">
//       <button id="set-color">Set Color</button>
//     </form>
//     <div class="brush"</div>
//   </div>
$(document).ready(function(){
// var colorSet = document.getElementById("set-color")
var colorSet = $("#set-color")
var colorField = $("#color-field")
// var colorField = document.getElementById("color-field")
// var brush = document.querySelector(".brush")
var brush = $(".brush")
// ###Commit 1
//
// * When I click the "Set Color" button,
// it should change the color of the "brush" box
// to the color I specify in the input field.
// (**Hint:**
// You will need to use `event.preventDefault()` somewhere in your code.)

colorSet.on("mouseover", function(event){
  event.preventDefault();
    // brush.style.background = colorField.value
    $(".brush").css({
      "background" : $(".colorField")
    })
});

// ###Commit 2
//
// * The same thing should happen when I press the enter key from inside the input field
// ***Successful with code above ***

// ###Commit 3
// className-HTMLElementObject.className=class
// * Using JavaScript, create 20 divs of the "square" class
 // and append them to the body
 // var squareClass = document.createElement("div")
// var changeSquareColor = function (){
//   event.target.style.backgroundColor = "green";
// }

//  for(var div = 0; div < 20; div++){
//    var squareClass = document.createElement("div");
//      squareClass.className = "square";
//        squareClass.addEventListener("mouseover", function(event){
//          this.style.backgroundColor = colorField.value;
//
//        })
//       document.body.appendChild(squareClass);
// }
// squareClass.addEventListener("hover", function(event){
//     this.style.backgroundColor = "green";
// });
// ###Commit 4
//
// * Add functionality so that when I click on each "square",
// it changes the color of that individual square to "green"

  for(var div = 0; div < 8000; div++){
    // var squareClass = document.createElement("div");
    var squareClass = $("<div></div>");
      squareClass.addClass("square");
        squareClass.on("mouseover", function(event){
          // $(this).style.backgroundColor = colorField.value;
          $(".square").css({
            "background" : $(".colorField")
          })
      })
            // document.body.appendChild(squareClass);
            $(".square").append(squareClass)
}

// ###Commit 5
// ***** See above ***
// * Modify your code so that when I click on each "square",
// it changes to the color I set using my input
// instead of "green" every time.

// ###Commit 6
//
// * Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// * Modify your code so that you are creating 8000 divs instead of 20.
// * Change the event that changes your box colors from 'click' to 'mouseover'
// * Paint a picture!
})
