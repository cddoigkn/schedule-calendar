// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on( "click", function() {
    var parentId = $(this).parent().attr("id");
    var userText = $(this).siblings("textarea").val();
    localStorage.setItem(parentId, userText);
    console.log(parentId, userText);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function(){
    var timeThis = $(this).attr("id").slice(5);
    console.log(timeThis);
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $("#currentDay").text(dayjs().format("dddd MMMM DD, YYYY"));
});  
// literally copying in the original div area in the html because all you have to do is adjust this
// to become more generalized; adding in empty variables so that it can adjust as the website changes.
//
`<div id="hour-9" class="row time-block past">
<div class="col-2 col-md-1 hour text-center py-3">9AM</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>`
