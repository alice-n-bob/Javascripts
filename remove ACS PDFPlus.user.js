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

$("li").remove(".pdf-low-res");

})();