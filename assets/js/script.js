// display the current date and time 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// get saved data from local storage for all hours 


// add click event listener for save button
$(".saveBtn").on("click", function() {
    // get nearby values
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // set items in local storage
    localStorage.setItem(time, text);
})

var timeTracker = function() {
    console.log("im working")
    console.log($("#9 .description"))
    console.log(localStorage.getItem("9"))
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
    // get current time 
    var currentHour = moment().hour();
    // loop over each hour
    $(".time-block").each(function() {
        var timeBlockHour = $(this).attr("id")
        // if past time
        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
        }
        // if current time 
        else if (timeBlockHour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // if future time 
        else if (timeBlockHour > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeTracker()

 

