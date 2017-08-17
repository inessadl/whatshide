// Hide the chat preview on Whatsapp Web
window.setTimeout(function () {
    console.log("oi");
    var x = document.querySelectorAll(".chat-status");

    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
        x[i].setAttribute("style", "display:none");
    }

}, 5000);
