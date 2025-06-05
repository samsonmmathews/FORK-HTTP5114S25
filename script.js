
let count = 0;

function increase() {
    count = count + 1;
    updateCounter();
    console.log("Counter increased");
}

function decrease() {
    count = count - 1;
    updateCounter();
    console.log("Counter decreased");
}

function reset() {
    count = 0;
    updateCounter();
    console.log("Counter reset");

}

function updateCounter() {
    document.getElementById('count').innerHTML = count;
}

document.getElementById('greetBtn').addEventListener("click", function() {
    const name = document.getElementById("name").value
    if(name == "") {
        alert("Please enter your name");
    } else {
        document.getElementById("welcome").innerHTML = "Welcome, " + name;
    }
})
