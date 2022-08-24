var currentTime = document.getElementById("CurrentTime");
var CurrentDate = document.getElementById("CurrentDate");
var StartWork = document.querySelector("#StartWork");
var StartMeal = document.querySelector("#StartMeal");
var EndMeal = document.querySelector("#EndMeal");
var EndWork = document.querySelector("#EndWork");
var Message = document.querySelector('#Message');
var TimeStart;
var BackOn;
var Mealtime;

window.setInterval(function () {
    currentTime.innerHTML = moment().format('LTS');
}, 1000);

CurrentDate.innerHTML = moment().format('ll');



// Eventlisteners for buttons
StartWork.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    TimeStart = currentTime;
    Message.innerHTML =("You Started Work at "+current);
    setTimeout(function () {
        Message.innerHTML = '';
    }, 3000);
});

EndWork.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    Message.innerHTML =("You Ended Work at "+current);
    setTimeout(function () {
        Message.innerHTML = '';
    }, 3000);

});

EndMeal.addEventListener("click", function () {
    var compare = moment(Mealtime).fromNow();
    if (compare == "30 minutes ago") {
        Message.innerHTML = ("Succsessfully Clocked Back In");
        BackOn=moment().format();
        setTimeout(function () {
            Message.innerHTML = '';
        }, 2000);

    }
    else {
        Message.innerHTML = ("Sorry you cannot clock back in");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 2000);
    }

});

StartMeal.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    Mealtime = currentTime;
    console.log(Mealtime);
    Message.innerHTML =("You Started Lunch at "+current);
    setTimeout(function () {
        Message.innerHTML = '';
    }, 3000);

});

