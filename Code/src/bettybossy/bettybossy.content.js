let button = document.createElement("button");
button.innerHTML = "EXPORT";

button.addEventListener("click", () => {
    chrome.runtime.sendMessage('bettybossy-click', () => {});

    // TODO add logic to extract recipe data
});

document.getElementsByClassName("bb-recipe-buttons")
    .item(0)
    .insertAdjacentElement("beforebegin", button);
