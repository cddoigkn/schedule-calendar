// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var timeClock = setInterval(function(){
   
   // updates clock on page with current time, day, month, and year
   var time = dayjs().format("h:m:s, dddd MMMM DD, YYYY"); 
   $("#currentDay").text(time);
  
    //updates colors in schedule
    var curHour = dayjs().format("HH");
    
    $(".time-block").each(function(){
      var timeThis = $(this).attr("id").slice(5);
      console.log(timeThis);
      if(timeThis < curHour){
        $(el).removeClass('present')
        $(el).addClass('past')
      }
      if(timeThis == curHour){
          $(el).removeClass('future');
          $(el).addClass('present');
      }
      if(timeThis > curHour){
        $(el).addClass('future');
      }
    });
  
  }, 1000)
  
  $(".saveBtn").on( "click", function() {
    var parentId = $(this).parent().attr("id");
    var userText = $(this).siblings("textarea").val();
    localStorage.setItem(parentId, userText);
    var messageEl = document.createElement("div");
    console.log(parentId, userText);
  });
  // display message when saved
  // "Activity Saved"
  // make function to display message

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