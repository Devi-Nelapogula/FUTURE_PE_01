/ Button click
document.querySelector(".btn").addEventListener("click", function() {
    alert("✅ Appointment booked! We will contact you soon.");
});

// Greeting
let hour = new Date().getHours();
let msg = "";

if (hour < 12) msg = "🌅 Good Morning!";
else if (hour < 18) msg = "☀️ Good Afternoon!";
else msg = "🌙 Good Evening!";

let greet = document.createElement("p");
greet.innerText = msg;
greet.style.marginTop = "10px";

document.querySelector("header").appendChild(greet);
