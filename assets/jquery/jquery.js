
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
var elementId;

var startOfBusiness = moment(09, 'hh');
var mclone = startOfBusiness.clone();
var setColourOnTime = startOfBusiness.clone();

function getStoredItem() {
    return JSON.parse(localStorage.getItem('Planner')) || [];
}
function storeItems(array) {
    return localStorage.setItem('Planner', JSON.stringify(array));
}

function deleteStoredItem() {
    return localStorage.removeItem('Planner');
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
    //console.log(mclone.format('h'));
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
    // saving id on a global  variable
    elementId = textAreadID;
    console.log(inputVal)

    var planObj = {
        "textAreadID": textAreadID,
        "planText": inputVal
    }
    setSavedItem.push(planObj);
    storeItems(setSavedItem);

    // user saved message

    $(".container")
        .prepend('<p class="userAlertMessage">Appointment added to <span style="color:red">localstorage</span></p>')
        .css({
            "colour": "red",
            "fload:": "right",
            "padding-right": "20px",
            "text-align": "center"
        });

    $("p.userAlertMessage").delay(700).hide("slow");
    // var clearTime = setTimeout(function () {
    //     $("p.userAlertMessage").hide();
    // }, 2000);
    // clearTimeout(clearTime);

}

// Now store the data array into local storage
var saveBtn = $("button");
//var storeVal = [];
saveBtn.on("click", saveInputs);
// saveBtn.on("click", displayStoredItem);

(function displayStoredItem() {
    // var dataId = $(this).siblings('.input').data('textareaid');
    // console.log('this is getting id on click', dataId);

    // alternative to this i could have used for look to changed the index therefore I would have only needed one of those block of code 

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

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// Use isBefore method in moment to check the moments

(function changeTextAreaColor() {
    // This set to 24 hours clock
    var currentTime = moment().hours();
    console.log(currentTime);
    for (var i = 0; setColourOnTime.hour() < 18; i++) {
        // This code loops over the current time from 9 to 5 and seets and sets background to grey untill current times matches with then set it to red and breaks out of the loop
        var time = setColourOnTime.format('H');
        console.log('time', time);

        if (time == currentTime) {
            console.log(i);
            // ${i} here increments the id on each loops which then targets the text area 
            $(`#id-${i}`).css("background", "red");
            break;
        } else if (time < currentTime) {
            $(`textarea#id-${i}`).css("background", "grey");
            // end of working day this clears the plan
            if (currentTime > 17) {
                deleteStoredItem();
            }
        }
        // increment the hours one
        setColourOnTime.add(1, 'hours');
    }
})();




// Ignore the code bellow

//  * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.

//  Persist events between refreshes of a page

// var arr = ["taco", "burrito", "taqwuito", "taco", "burrito", "taqwuito"]

// console.log("arr : ", arr)
// console.log("map : ", arr.map(function (cat) {
//     return cat.toUpperCase()
// }))
// console.log("filter : ", arr.filter((cat, i) => {
//     return arr.indexOf(cat) != i
// }))
// var thing = JSON.parse(localStorage.getItem("Planner"))

// console.log("filter : ", thing.map(function (whatever) {
//     return whatever.textAreadID
// }).filter((cat, i) => {
//     console.log("cat: ", cat, "thing: ", thing[i].textAreadID)
//     console.log(i => i.item === "chips")
//     return thing.indexOf(thing[i].textAreadID) == cat
// }))

// console.log("map : ", JSON.parse(localStorage.getItem("Planner")).map(function (cat) {
//     return cat.textAreadID
// }))

`
// console.log('This is clicked element id', elementId);
// var storedData = JSON.parse(localStorage.getItem("Planner"));
// console.log(storedData[0].textAreadID);

// storedData.filter(function (arr, index) {
//     // console.log(index, " ", arr.textAreadID)
//     console.log(arr);

// })`
// .filter((obj, index) => {
// / /console.log(obj);
// });

// .filter((item, index) => {
//     console.log(item.planText)
//     //storedData.delete(item);
// });

