chrome.runtime.onMessage.addListener(function (message) {

    if (message === "chefkoch-click") {
        console.log("chefkoch");
    }
    else if (message === "bettybossy-click") {
        console.log("bettybossy");
    }

});
