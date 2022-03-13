
function howdy() {
    let name = "JODE"
    let last = "Sparks"
    alert("Welcome to the JavaScript page! Please enjoy the following functions.")
}

function loopy(){
    for (i = 0; i<5; i++) {
        console.log("number is " + i)
    }
}

function evalNumber(parameters){
    var inputValue = (prompt("Enter any integer."))
    const originalValue = inputValue
    if (inputValue.includes(",")) {
        inputValue = inputValue.replace(",","")
    }
    if (isNaN(inputValue) || inputValue.includes(".")){
        alert("I don't know what sick game you're playing, but '" + originalValue + "' is not an integer, bro.")
    }

    Number(inputValue)

    if (inputValue % 2 == 0){
        alert(originalValue + " is even, bro")
    }
    if (inputValue % 2 == 1){
        alert(originalValue + " is odd, bro")
    }
}

function changeTitle(){
    var hasClicked = false;
    let selectedElement = document.getElementById("titel");
    console.log(selectedElement);
    if (Boolean(hasClicked)) {
        selectedElement.innerText = "And again, the title is changed."
    }
    else {
    selectedElement.innerText = "Congrats, dear user, for you have changed this title."
    }
    
}

function printArray() {
    array = ["washington", "adams", "jefferson"]
    array.push("madison")
    for (let i = 0; i < array.length; i ++) {
        console.log(array[i])
    }
}

function addElements(on_or_off){
    if (on_or_off == "off") {
        return;
    }
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div ' + i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i]  
      }
}

function dateTime(){
    var date_and_time = new Date();
    var minutes = date_and_time.getMinutes();
    //newDiv.setAttribute('id', 'div' + date_and_time);
    document.getElementById('date_time_div').innerText = minutes;
    }

function magic(){
    var rabbit = document.getElementById('rabbit');
    rabbit.style.display = "none";

}
