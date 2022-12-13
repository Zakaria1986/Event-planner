
/* 
**  AS AN employee with a busy schedule
**  I  WANT to add important events to a daily planner
**  SO THAT I can manage my time effectively
*/

//const { holdReady } = require("jquery");

// ## Acceptance Criteria

//  Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd MMM Do');;
document.getElementById("currentDay").innerHTML = currentDay;

// Present timeblocks for standard business hours when the user scrolls down.
// - got every hour create a time block row from  9-5
//  - To do that need loop to start looking from 9 and break at 5
//  - For every lool generate html and check if its = or greate then break

// var hours = moment(09, HH);
var startOfBusiness = moment(09, 'hh');

while (startOfBusiness.hour() < 18) {
    console.log(startOfBusiness.format('hha'));

    startOfBusiness.add(1, 'hours');

    console.log(moment().format("HH").isBefore(startOfBusiness));
}

// for (i = 9; i > 4; --i) {
//     console.log(i + hours);
// }


// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 // Use isBefore method in moment to check the moments


//  * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.



//  Persist events between refreshes of a page