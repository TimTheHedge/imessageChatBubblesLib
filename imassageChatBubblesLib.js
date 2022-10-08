var messageElementSend = document.querySelector(".i-send");
var messageElementReceive = document.querySelector(".receive");

var messageFontSizeStrSend = window.getComputedStyle(messageElementSend).fontSize;
var messageFontSizeStrReceive = window.getComputedStyle(messageElementReceive).fontSize;

var indexPxSend = messageFontSizeStrSend.indexOf("px");
var indexPxReceive = messageFontSizeStrReceive.indexOf("px");

var messageFontSizeSend = Number(messageFontSizeStrSend.slice(0, indexPxSend));
var messageFontSizeReceive = Number(messageFontSizeStrReceive.slice(0, indexPxReceive));


document.addEventListener("DOMContentLoaded", function() {

    if (messageFontSizeSend <= 14 || messageFontSizeReceive <= 14){
        sendElement = document.querySelector(".send");
        sendElement.classList.toggle("send-small");
        receiveElement = document.querySelector(".receive");
        receiveElement.classList.toggle("receive-small");
    }

})