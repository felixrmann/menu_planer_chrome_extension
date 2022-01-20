const button = document.getElementById("getRecipe");

button.addEventListener("click", () => {
    console.log('hello world');
});

chrome.runtime.onMessage.addListener(
    function (message, sender) {
        console.log(message);
        console.log(sender);
    });