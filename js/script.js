var messageElement = document.querySelector(".message");

var messageFontSizeStr = window.getComputedStyle(messageElement).fontSize;

var indexPX = messageFontSizeStr.indexOf("px");

var messageFontSize = Number(messageFontSizeStr.slice(0, indexPX));


document.addEventListener("DOMContentLoaded", function() {

    if (messageFontSize <= 14){
        sendElement = document.querySelector(".send");
        sendElement.classList.toggle("send-small");
        receiveElement = document.querySelector(".receive");
        receiveElement.classList.toggle("receive-small");
    }

})