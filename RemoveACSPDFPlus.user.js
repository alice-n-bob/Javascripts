// ==UserScript==
// @name         Remove PDF Plus from ACS
// @description  Ease Zotero Chrome Connector
// @author       @ronery
// @version      1.0
// @match        http://pubs.acs.org/*
// @grant        none
// @updateURL    https://github.com/lanbingxuanyi/Javascripts/raw/master/RemoveACSPDFPlus.user.js
// ==/UserScript==

(function() {

$("li").remove(".pdf-low-res");

})();
