// ** Pseudocode ** //
// Use dayjs to display the current date and time in the header
// Create time blocks for each hour of the work day
// Create a text area for the user to enter tasks/meetings/events
// Create a button to save the text
// Add a listener for click events on the save button
// Use the id in the containing time-block as a key to save the user input in local storage
// When the page is refreshed, get any user input that was saved in localStorage and set the values of the corresponding textarea elements
// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour


// Variables
var currentDayEl = $("#currentDay");
var containerEl = $(".container");

var now = dayjs();


var timeBlocks = [
    { hour: "9", time: "9:00 AM" },
    { hour: "10", time: "10:00 AM" },
    { hour: "11", time: "11:00 AM" },
    { hour: "12", time: "12:00 PM" },
    { hour: "13", time: "1:00 PM" },
    { hour: "14", time: "2:00 PM" },
    { hour: "15", time: "3:00 PM" },
    { hour: "16", time: "4:00 PM" },
    { hour: "17", time: "5:00 PM" },
];
var timeBlockEl = $(".time-block");
var saveBtn = $(".saveBtn");
var textArea = $("textarea");


// Use this for style:
{/* <div id="hour-9" class="row time-block past">
            <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
            <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                <i class="fas fa-save" aria-hidden="true"></i>
            </button>
        </div> */}


// Functions






// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





