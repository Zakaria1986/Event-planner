
/* 
**  AS AN employee with a busy schedule
**  I  WANT to add important events to a daily planner
**  SO THAT I can manage my time effectively
*/

// const { contains } = require("jquery");

//const { holdReady } = require("jquery");

// Global veriables 

// will store: id, time, input, which then will be upated and saved based on the id from local storange
var data = [];
var container = $(".container");


var startOfBusiness = moment(09, 'hh');
var mclone = startOfBusiness.clone();


// 1. Need two sets of logical code, one is to create time and store it in the local storage
// 2. Retrive the data and presented in the window



// ## Acceptance Criteria
// 1. working on one
//  Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format('dddd MMM Do');;
$("#currentDay").text(currentDay);

// Present timeblocks for standard business hours when the user scrolls down.
// - Create a time block row from  9-5
//  - Use a loop to start looking from 9 and break at 5
// 

// var hours = moment(09, HH);


for (var i = 0; mclone.hour() < 18; i++) {

    var objects = {

        id: i,
        time: mclone.format('ha'),
        inputs: []
    }
    // console.log(objects);
    data.push(objects);
    // data.push(objects);

    mclone.add(1, 'hours');
}

localStorage.setItem("data", JSON.stringify(data));

var getItem = JSON.parse(localStorage.getItem("data"));
getItem.forEach(function (item, index) {

    var rows = `

    <div class="row">
        <div class=" plans col col-1 hour">
        ${item.time}
        </div>
        <div class=" plans future col col-10">
        ${item.inputs}
        </div>
        <div class=" plans saveBtn col col-1">
        <i class="fas fa-upload"></i>
    
        </div>
  </div>
`
    container.append(rows);

    // increasing the i fontawesome size
    $(".fa-upload").css({
        "font-size": "1.5rem",
        "text-align": "justify"
    });

});


// 2. Got  day time in to local storange. now get the data, write some html and present it to the browser 



// Now store the data array into local storage


// for (i = 9; i > 4; --i) {
//     console.log(i + hours);
// }


// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 // Use isBefore method in moment to check the moments


//  * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.



//  Persist events between refreshes of a page