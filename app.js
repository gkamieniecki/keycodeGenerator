document.addEventListener("keydown", () => {
    document.getElementById("keycode-display").innerHTML = event.key;
    document.getElementById("key-value").innerHTML = event.key;
    document.getElementById("code-value").innerHTML = event.keyCode;
    document.getElementById("which-value").innerHTML = event.code;

})