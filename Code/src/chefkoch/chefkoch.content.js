let button = document.createElement("button");
button.innerHTML = "EXPORT";

button.addEventListener("click", () => {
    // extract recipe from dom
    // [x] url
    // getUrl()
    // [x] url for image
    // getImagePath();
    // [x] name of recipe
    // getName();
    // [x] zubereitungszeit
    // getCookingTime();
    // [x] zutaten + angaben
    //getTableRows();
    // [x] portionen
    // getPortions();
    // [x] schritte (als array)
    // getCookingSteps();

    chrome.runtime.sendMessage('chefkoch-click', () => {});
});

// remove unnecessary components from the chefkoch.de website
// TODO rework
document.getElementsByClassName("pi-cont")
    .item(0)
    .insertAdjacentElement("beforebegin", button);

// document.getElementsByClassName("bring-teaser").item(0).remove();