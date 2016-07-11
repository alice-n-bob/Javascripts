// ==UserScript==
// @name  Old article view
// @namespace    http://example.com
// @author       @ronery
// @description Old article view.
// @updateRUL https://github.com/biochemputer/Javascripts/raw/master/Old%20article%20view.user.js
// @version 0.1

// @match http://onlinelibrary.wiley.com/*
// @match https://onlinelibrary.wiley.com/*

var url = window.location.toString();
window.location = url.replace('doi/10.1002', 'wol1/doi/10.1002');
