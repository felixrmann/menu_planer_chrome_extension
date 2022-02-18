let button = document.createElement('button');
button.innerHTML = 'EXPORT';

button.addEventListener('click', () => {

    const extractedRecipe = {
        'name': getRecipeName(),
        'url': getUrl(),
        'image': getImagePath(),
        'portions': getPortions(),
        'time': getCookingTime(),
        'ingredients': getIngredients(),
        'steps': getCookingSteps()
    }

    console.log(extractedRecipe);

    chrome.runtime.sendMessage('chefkoch-click', () => {});
});

/**
 * change the dom of https://chefkoch.de the dom
 */

injectButton(button);

removeBringTeaser();
removeAds();