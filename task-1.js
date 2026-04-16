// UGC DATA
const hooks = [
  "I stopped using expensive skincare for this…",
  "My acne was ruining my confidence",
  "This cleared my skin in 2 weeks",
  "Tried everything… THIS worked",
  "POV: Your skin finally clears",
  "Not sponsored… just real results",
  "I was insecure… not anymore",
  "This is why your acne isn’t going away",
  "Clear skin = confidence"
];

const scripts = [
`I’ve been struggling with acne for 2 years...
Tried everything.
Then I found this serum.
In 2 weeks, my skin improved.
No breakouts. More confidence.
Try it once.`,

`POV: You avoid mirrors because of acne...
That was me.
Now my skin is improving.
Confidence is back.
Try this serum.`,

`Acne? Tried everything?
Same.
This worked.
Clear skin. Confidence.
Get yours now.`
];

// GENERATE RANDOM HOOK
function generateHook() {
  const random = hooks[Math.floor(Math.random() * hooks.length)];
  document.getElementById("hookOutput").innerText = random;
}

// GENERATE RANDOM SCRIPT
function generateScript() {
  const random = scripts[Math.floor(Math.random() * scripts.length)];
  document.getElementById("scriptOutput").innerText = random;
}

// COPY FUNCTION
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// ADD EVENT LISTENERS AFTER LOAD
window.onload = function () {
  document.getElementById("hookBtn").addEventListener("click", generateHook);
  document.getElementById("scriptBtn").addEventListener("click", generateScript);
  document.getElementById("copyHook").addEventListener("click", () => copyText("hookOutput"));
  document.getElementById("copyScript").addEventListener("click", () => copyText("scriptOutput"));
};
