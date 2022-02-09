/**
 In this file are methods to extract the data from https://chefkoch.de recipe page
 */

/**
 * Returns the url of the recipe
 * @returns {string}
 */
function getUrl() {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const pathname = window.location.pathname;
    const search = window.location.search;

    return protocol + "//" + host + pathname + search;
}

/**
 * Returns the path to the image
 * @returns {string}
 */
function getImagePath() {
    const image = document.getElementsByClassName("recipe-header").item(0).querySelectorAll("amp-img").item(0);
    return image.getAttribute("src");
}

/**
 * Returns the Name of the recipe
 * @returns {string}
 */
function getName() {
    const h1Header = document.getElementsByClassName("recipe-header").item(0).querySelectorAll("h1").item(0);
    console.log(h1Header.innerText);
    return h1Header.innerText;
}

/**
 * Returns the cooking time in minutes of the recipe
 * @returns {number}
 */
function getCookingTime() {
    const cookingTimeText = $("span:contains('Gesamtzeit')").text();
    const cookingTime = cookingTimeText.match(/\d/g).join("");

    if (cookingTime.length > 2) {
        const hours = cookingTime.substring(0, cookingTime.length - 2);
        const minutes = cookingTime.slice(-2);
        return +(hours * 60) + +minutes;
    } else {
        return +cookingTime;
    }
}

/**
 * Returns the recipe ingredients from the table
 * @returns {{"amount", "ingredient"}[]}
 */
function getTableRows() {
    let ingredients = [];
    const trArray = document.getElementsByClassName("ingredients table-header").item(0).tBodies[0].rows;
    for (let i = 0; i < trArray.length; i++) {
        const amountDiv = trArray.item(i).getElementsByClassName("td-left");
        const ingredientDiv = trArray.item(i).getElementsByClassName("td-right");
        ingredients.push({"amount": amountDiv.item(0).innerText, "ingredient": ingredientDiv.item(0).innerText});
    }
    return ingredients;
}

/**
 * Returns the number of selected portions
 * @returns {string}
 */
function getPortions() {
    const portionInput = document.getElementsByClassName("ds-input").item(0);
    return portionInput.getAttribute("value");
}

/**
 * Returns the steps to cook the recipe
 * @returns {string[]}
 */
function getCookingSteps() {
    const recipeText = $("article:contains('Zubereitung')").find('div').first().text();
    let stepArray = recipeText.slice(5).split("\n");
    return stepArray.filter(function (value) {
        return value.length > 0;
    });
}




























