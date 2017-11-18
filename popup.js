$(document).ready(function(){
    chrome.tabs.executeScript({file:'jquery.min.js'}, function() {
        chrome.tabs.executeScript({file:'test.js'});
    });
});