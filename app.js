let counter = 10;
window.InputEvent = window.Event || window.InputEvent;
var event12 = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("thisIsMe")[0];
for (let index = 0; index < counter; index++) {
        textbox.innerHTML = "test";
        textbox.dispatchEvent(event12);
        document.getElementsByClassName("test90byme")[0].click();
}