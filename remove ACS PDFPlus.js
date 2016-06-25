// ==UserScript==
// @name         Remove PDF Plus from ACS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
// Get the element by their class name
//var cur_columns = document.getElementsByClassName('icon-item icon-item-24px subordinate pdf-low-res');

// Now remove them

//for (var i = 0; i < cur_columns.length; i++) {
$("li").remove(".pdf-low-res");

})();