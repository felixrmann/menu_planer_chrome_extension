import {exportRecipeButton} from "../button/export-button";

let button = exportRecipeButton;
button.addEventListener("click", () => {
    chrome.runtime.sendMessage('bettybossy-click', () => {});

    // TODO add logic to extract recipe data
});

document.getElementsByClassName("bb-recipe-buttons")
    .item(0)
    .insertAdjacentElement("afterend", button);
