let randomMessage = ["hacked","i will become hacker ","you are my victim ","lol","stupid"]

window.InputEvent = window.Event || window.InputEvent;
let event = new InputEvent("input",{bubbles:true});
let text = document.getElementsByClassName("newText")[0];

setInterval(()=>{
    text.innerHTML = randomMessage[Math.floor(Math.random() * randomMessage.length) + 0]
    text.dispatchEvent(event)
    document.getElementsByClassName("tvf2evcx")[0].click()
},1000)