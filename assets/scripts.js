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


// unused code
// Create header with current date and time
// var scheduler = $('#scheduler');
// var now = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
// var currentDay = $('<h1>');

// function displayTime() {
//   currentDay.text(now);
// }

// // Create a for loop that creates a div for each hour of the day
// for (var i = 9; i < 18; i++) {
//     var timeBlock = $('<div>');
//     timeBlock.addClass('time-block');
//     timeBlock.attr('id', 'hour-' + i);
//     scheduler.append(timeBlock);

//     // Create a div for the hour
//     var hour = $('<div>');
//     hour.addClass('hour');
//     hour.text(i + ':00');
//     timeBlock.append(hour);

//     // Create a textarea for the user to enter text
//     var textArea = $('<textarea>');
//     textArea.addClass('description');
//     timeBlock.append(textArea);

//     // Create a button to save the text
//     var saveBtn = $('<button>');
//     saveBtn.addClass('saveBtn');
//     saveBtn.text('Save');
//     timeBlock.append(saveBtn);
// }