
let name = "John";
const age = 30;
let isStudent = true;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function greet(name) {
    return "Hello, " + name + "!";
}

const message = greet("Alice");
console.log(message); // Outputs: Hello, Alice!

const button = document.querySelector("button");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
