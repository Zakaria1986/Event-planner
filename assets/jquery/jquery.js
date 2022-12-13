
/* 
**  AS AN employee with a busy schedule
**  I  WANT to add important events to a daily planner
**  SO THAT I can manage my time effectively
*/

// ## Acceptance Criteria

//  Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd MMM Do');;
document.getElementById("currentDay").innerHTML = currentDay;

// Present timeblocks for standard business hours when the user scrolls down.
    // - buniness hours are 9-5:30
    // -


//  * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.



//  Persist events between refreshes of a page