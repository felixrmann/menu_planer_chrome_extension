chrome.runtime.onMessage.addListener(function (message, sender) {

    console.log(sender)

    if (sender.origin === "https://www.chefkoch.de") {
        console.log("chefkoch");
    }
    else if (sender.origin === "https://www.bettybossi.ch") {
        console.log("bettybossy");
    }

});
