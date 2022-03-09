// get saved data from local storage for all hours 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// display the current date and time 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// add click event listener for save button
$(".saveBtn").on("click", function() {
    // get nearby values
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // set items in local storage
    localStorage.setItem(text, time);
})

var timeTracker = function() {
    // get current time 
    var currentHour = moment().hour();
    console.log(currentHour)
    // loop over each hour
    $(".time-block").each(function() {
        var timeBlockHour = $(this).attr("id")
        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (timeBlockHour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else if (timeBlockHour > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeTracker()
 

