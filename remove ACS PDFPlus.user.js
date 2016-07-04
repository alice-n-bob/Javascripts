// ==UserScript==
// @name         Remove PDF Plus from ACS
// @namespace    http://example.com
// @description  Ease Zotero Chrome Connector
// @author       @ronery
// @match        http://pubs.acs.org/*
// @match        http://pubs.acs.org.*/*
// @updateURL    https://github.com/biochemputer/Javascripts/raw/master/remove%20ACS%20PDFPlus.user.js
// ==/UserScript==

(function() {

$("li").remove(".pdf-low-res");

})();
