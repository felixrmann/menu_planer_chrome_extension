/**
 * changes the dom to the needs of the extension
 */

/**
 * removes the bring-ad-banner
 */
function removeBringTeaser() {
    $('div.bring-teaser').remove();
}

/**
 * injects the export button into the dom
 * @param button
 */
function injectButton(button) {
    $('.pi-cont').before(button);
}

/**
 * removes all the ads on the page
 */
function removeAds() {
    $('.ad').remove();
    $('.ad--skyscraper').remove();
}