// ** Pseudocode ** //
// Use dayjs to display the current date and time in the header
// Add a listener for click events on the save button
// Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
// Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.

// ** Code ** //

// Display today's day and date
var now = dayjs().format('MMMM DD, YYYY [at] hh:mm A');
$("#currentDay").html(now);

// Save button click listener
$(function () { 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
  
// Add past, present, or future class to each time block
    function timeTracker() {
        var timeNow = dayjs().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

// Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Call timeTracker function
    timeTracker();
})

// source: https://github.com/sylviaprabudy/work-day-scheduler



