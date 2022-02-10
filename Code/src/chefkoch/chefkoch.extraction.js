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
    return $("img.i-amphtml-fill-content").first().attr("src");
}

/**
 * Returns the Name of the recipe
 * @returns {string}
 */
function getName() {
    return $("article.recipe-header").children("div").children("h1").text();
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
    let ingredientTables = [];

    const tables = $(".ingredients");
    jQuery.each(tables, function (index, element) {
        const thead = element.querySelector("thead");
        let title = undefined;
        if (thead !== null) {
            title = thead.querySelector("h3").innerText;
        }

        const trows = element.querySelector("tbody").rows;
        let ingredients = [];
        for (let i = 0; i < trows.length; i++) {
            const amountDiv = trows.item(i).getElementsByClassName("td-left");
            const ingredientDiv = trows.item(i).getElementsByClassName("td-right");
            ingredients.push({"amount": amountDiv.item(0).innerText, "ingredient": ingredientDiv.item(0).innerText});
        }

        ingredientTables.push({
           "title": title,
           "ingredients": ingredients
        });
    });

    return ingredientTables;
}

function extractData(element) {
    element.children("tbody").children("tr").each(function (index, element) {
        const amount = element.children("td-left").text();
        const ingredient = element.children("td-right").text();

        console.log(amount);
        console.log(ingredient);
    });
}

/**
 * Returns the number of selected portions
 * @returns {string}
 */
function getPortions() {
    return $(".ds-input").first().attr("value");
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




























