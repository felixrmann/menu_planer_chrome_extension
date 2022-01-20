import {exportRecipeButton} from "../button/export-button";

let button = exportRecipeButton;
button.addEventListener("click", () => {
    chrome.runtime.sendMessage('chefkoch-click', () => {});

    // TODO add logic to extract recipe data
});

document.getElementsByClassName("pi-cont")
    .item(0)
    .insertAdjacentElement("afterend", button);