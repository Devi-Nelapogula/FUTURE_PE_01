// Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // DATA
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

    // SELECT ELEMENTS SAFELY
    const hookBtn = document.getElementById("hookBtn");
    const scriptBtn = document.getElementById("scriptBtn");
    const hookOutput = document.getElementById("hookOutput");
    const scriptOutput = document.getElementById("scriptOutput");
    const copyHook = document.getElementById("copyHook");
    const copyScript = document.getElementById("copyScript");

    // FUNCTION: Generate Hook
    function generateHook() {
        const random = hooks[Math.floor(Math.random() * hooks.length)];
        if (hookOutput) {
            hookOutput.innerText = random;
        }
    }

    // FUNCTION: Generate Script
    function generateScript() {
        const random = scripts[Math.floor(Math.random() * scripts.length)];
        if (scriptOutput) {
            scriptOutput.innerText = random;
        }
    }

    // FUNCTION: Copy Text
    function copyText(text) {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied!"))
            .catch(() => alert("Copy failed"));
    }

    // EVENT LISTENERS (SAFE CHECK)
    if (hookBtn) {
        hookBtn.addEventListener("click", generateHook);
    }

    if (scriptBtn) {
        scriptBtn.addEventListener("click", generateScript);
    }

    if (copyHook && hookOutput) {
        copyHook.addEventListener("click", function () {
            copyText(hookOutput.innerText);
        });
    }

    if (copyScript && scriptOutput) {
        copyScript.addEventListener("click", function () {
            copyText(scriptOutput.innerText);
        });
    }

});
