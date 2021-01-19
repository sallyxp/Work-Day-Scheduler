
$(document).ready(function () {// tells engine to load 1)html & 2)css first.
   var currentHour = moment().hour();
  //for testing purposes
  //var currentHour = 13;
   

    //display current day & time.
   $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
    //assign saveBtn click listener for user input and time stamp??

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
        var blockHour = $(this).parent().attr("id");
            
        localStorage.setItem(time, text);
    
    })
    //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
     
    //hour tracker colour codes the time blocks
    
    hourTracker();

    function hourTracker() {
        blockHour = 9;
        // loop over time blocks
        $(".time-block").each(function () {
            // cycles round the time block class and checks to see whether past,present,future
            // in relation to current hour.
            
            //check if we've moved past this time, click into css/html given classes of past, present, or future
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
                   }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                
            }
            else {
               console.log("in future");
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
               
            }
            blockHour++;
        })
    }
 //   hourTracker(); //re-run function
})