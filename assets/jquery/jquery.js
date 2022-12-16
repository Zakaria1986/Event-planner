
/* 
**  AS AN employee with a busy schedule
**  I  WANT to add important events to a daily planner
**  SO THAT I can manage my time effectively
*/

//const { type } = require("jquery");

// const { contains } = require("jquery");

//const { holdReady } = require("jquery");

// Global veriables 

// will store: id, time, input, which then will be upated and saved based on the id from local storange
var data = [];
var container = $(".container");


var startOfBusiness = moment(09, 'hh');
var mclone = startOfBusiness.clone();

function getStoredItem() {
    return JSON.parse(localStorage.getItem('Planner')) || [];
}
function storeItems(array) {
    return localStorage.setItem('Planner', JSON.stringify(array));
}

function deleteStoredItem() {
}



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

// 2. Got  day time in to local storange. now get the data, write some html and present it to the browser 
var getItem = JSON.parse(localStorage.getItem("data")) || [];
getItem.forEach(function (item, index) {
    var rows = `
    <div class="row id-${item.id}" data-id="${item.id}">
        <div  class="plans col col-md-1 hour">
        ${item.time}
        </div>
        <textarea data-textareaId="${item.id}"class="input future col-md-10" id="id-${item.id}">
        </textarea>  
        <button class="plans saveBtn col col-md-1 data-btnId=${item.id}">
        <i class="fas fa-upload"> </i>    
        </button>
  </div>
`
    container.append(rows);

    // increasing the i fontawesome size
    $(".fa-upload").css({
        "font-size": "1.5rem",
        "text-align": "justify"
    });
});

// storing data 
function saveInputs(e) {
    e.preventDefault;
    var setSavedItem = getStoredItem();
    var inputVal = $(this).siblings('.input').val().trim();
    rowId = $(this).parent().attr('id');
    var textAreadID = $(this).siblings('.input').data('textareaid');

    if (inputVal.length > 0) {
        var planObj = {
            "textAreadID": textAreadID,
            "planText": inputVal
        }
        setSavedItem.push(planObj);
        localStorage.removeItem(textAreadID);
        storeItems(setSavedItem);
    }
}


// Now store the data array into local storage

var saveBtn = $("button");
//var storeVal = [];
saveBtn.on("click", saveInputs);
// saveBtn.on("click", displayStoredItem);


(function displayStoredItem() {


    // var dataId = $(this).siblings('.input').data('textareaid');
    // console.log('this is getting id on click', dataId);

    var str = ' ';

    var getItem = getStoredItem();
    getItem.forEach((item, index) => {
        if (item.textAreadID === 0) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-0').val(str);
        }
        else if (item.textAreadID === 1) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-1').val(str);
        }
        else if (item.textAreadID === 2) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-2').val(str);
        }
        else if (item.textAreadID === 3) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-3').val(str);
        }
        else if (item.textAreadID === 4) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-4').val(str);
        }
        else if (item.textAreadID === 5) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-5').val(str);
        } else if (item.textAreadID === 6) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-6').val(str);
        }
        else if (item.textAreadID === 7) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-7').val(str);
        }
        else if (item.textAreadID === 8) {
            str = ' ';
            str += item.planText + '\n';
            $('textarea#id-8').val(str);
        }
    })

})();

// var inputVal = JSON.parse(localStorage.getItem("inputDate")) || [];

// inputVal.forEach((item, index) => {
//     if (item.id.includes(0) > 0) {
//         console.log('id: ' + item.id);
//     };
// });






// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 // Use isBefore method in moment to check the moments


//  * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.



//  Persist events between refreshes of a page