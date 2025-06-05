let count = 0

const increase = () => {
    count += 1
    updateCounter()
    console.log("Counter increased")
}

const decrease = () => {
    count -= 1
    updateCounter()
    console.log("Counter decreased")
}

function reset() {
    count = 0
    updateCounter()
    console.log("Counter reset")
}

function updateCounter() {
    document.getElementById('count').innerHTML = count;
}

document.getElementById('greetBtn').addEventListener("click", () => {
    const nameInput = document.getElementById("name")
    const name = nameInput.value.trim()
    if(name === "") {
        alert("Please enter your name")
        nameInput.focus()
    } else {
        document.getElementById("welcome").innerText = "Welcome, " + name
        count += 1
        updateCounter()
        console.log("Counter increased by greet")
    }
})
