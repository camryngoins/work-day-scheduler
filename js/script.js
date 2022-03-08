// get saved data from local storage for all hours 
$("#time-8am .description").val(localStorage.getItem("time-8am"));
$("#time-9am .description").val(localStorage.getItem("time-9am"));
$("#time-10am .description").val(localStorage.getItem("time-10am"));
$("#time-11am .description").val(localStorage.getItem("time-11am"));
$("#time-12pm .description").val(localStorage.getItem("time-12pm"));
$("#time-1pm .description").val(localStorage.getItem("time-1pm"));
$("#time-2pm .description").val(localStorage.getItem("time-2pm"));
$("#time-3pm .description").val(localStorage.getItem("time-3pm"));
$("#time-4pm .description").val(localStorage.getItem("time-4pm"));
$("#time-5pm .description").val(localStorage.getItem("time-5pm"));

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

var trackHours = function() {
    var currentHour = moment().hour();
    
    // loop over each hour
    $(".time-block").each(function() {
       
    })
}
trackHours()