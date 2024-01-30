"use strict";

// var hourNine = document.getElementById("hour-9");
// var hourTen = document.getElementById("hour-10");
// var hourEleven = document.getElementById("hour-11");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // Select the save button and the time-block
let saveButton = document.querySelector('.saveBtn');
let timeBlock = document.querySelector('.time-Block');

// Add click event listener to the save button
saveButton.addEventListener('click', function() {
  // Get the user input
  let userInput = document.querySelector('.description').value;

  // Use the id of the time-block as the key to save the user input in local storage
  localStorage.setItem(timeBlock, userInput);
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // Get the current hour
let currentHour = new Date().getHours();

// Select all time blocks
let timeBlocks = document.querySelectorAll('.time-block');

// Loop through each time block
timeBlocks.forEach(function(timeBlock) {
  // Get the hour of the time block from its id
  let timeBlockHour = parseInt(timeBlock.id);

  // Remove all classes
  timeBlock.classList.remove('past', 'present', 'future');

  // Compare the time block hour to the current hour and apply the appropriate class
  if (timeBlockHour < currentHour) {
    timeBlock.classList.add('past');
  } else if (timeBlockHour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
});
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // Select all textarea elements
let textareas = document.querySelectorAll('textarea');

// Loop through each textarea
textareas.forEach(function(textarea) {
  // Get the saved value from localStorage using the id of the textarea as the key
  let savedValue = localStorage.getItem(textarea.id);

  // If a value was found, set the value of the textarea to the saved value
  if (savedValue) {
    textarea.value = savedValue;
  }
});
  // TODO: Add code to display the current date in the header of the page.
  // Create a new Date object
let currentDate = new Date();

// Format the date to a readable string
let dateString = currentDate.toDateString();

// Select the header element
let header = document.getElementById('currentDay');
// Set the text content of the header to the date string
header.textContent = dateString;
});