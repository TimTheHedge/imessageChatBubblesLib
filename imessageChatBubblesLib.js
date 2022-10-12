var messageElementSend = document.querySelector(".i-send");
var messageElementReceive = document.querySelector(".i-receive");

var messageFontSizeStrSend = window.getComputedStyle(messageElementSend).fontSize;
var messageFontSizeStrReceive = window.getComputedStyle(messageElementReceive).fontSize;

var indexPxSend = messageFontSizeStrSend.indexOf("px");
var indexPxReceive = messageFontSizeStrReceive.indexOf("px");

var messageFontSizeSend = Number(messageFontSizeStrSend.slice(0, indexPxSend));
var messageFontSizeReceive = Number(messageFontSizeStrReceive.slice(0, indexPxReceive));


document.addEventListener("DOMContentLoaded", function() {

    if (messageFontSizeSend <= 14 || messageFontSizeReceive <= 14){
        sendElement = document.querySelector(".i-send");
        sendElement.classList.toggle("i-send-small");
        receiveElement = document.querySelector(".i-receive");
        receiveElement.classList.toggle("i-receive-small");
    }

})