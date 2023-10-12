$(".time-block").each(function(){
  var key = $(this).attr("id");
  var item = localStorage.getItem(key);
  $(this).find("textarea").val(item);
});

var timeClock = setInterval(function(){
   
   // updates clock on page with current time, day, month, and year
   var time = dayjs().format("h:mm:ss, dddd MMMM DD, YYYY"); 
   $("#currentDay").text(time);
  
    //updates colors in schedule
    var curHour = dayjs().format("HH");
    
    $(".time-block").each(function(){
      var timeThis = $(this).attr("id").slice(5);
      console.log(timeThis);
      if(parseInt(timeThis) < parseInt(curHour)){
        $(this).removeClass('present')
        $(this).addClass('past')
      }
      if(parseInt(timeThis) == parseInt(curHour)){
          $(this).removeClass('future');
          $(this).addClass('present');
      }
      if(parseInt(timeThis) > parseInt(curHour)){
        $(this).addClass('future');
      }
    });
  
  }, 1000)
  // function for save button that responds by making the save approved message appear then making it disappear after 5 seconds
  $(".saveBtn").on( "click", function() {
    var parentId = $(this).parent().attr("id");
    var userText = $(this).siblings("textarea").val();
    localStorage.setItem(parentId, userText);
    var messageEl = $('#save-message');
    $(messageEl).removeClass('hidden');
    var interval = setInterval(function(){
      $(messageEl).addClass('hidden');
      clearInterval(interval);
    }, 5000)
  });
  // display message when saved
  // "Activity Saved"
  // make function to display message

  $(".time-block").each(function(){
    var timeThis = $(this).attr("id").slice(5);
    console.log(timeThis);
  });