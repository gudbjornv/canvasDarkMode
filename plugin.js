// ==UserScript==
// @name         Dark Canvas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the Kattis problems pages background darker.
// @author       You
// @match        https://reykjavik.instructure.com/*
// @grant        none
// ==/UserScript==

(function(){

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'body, div, li, a, h1, h2, h3, h4, #breadcrumbs>ul>li+li:last-of-type a, .ic-Dashboard-header__layout, .btn, .Button, .ui-button{background-color: #303030 !important; color: #fff !important;} .active, .ig-header, .name {border-left: 2px solid #ffe375 !important; color: #ffe375 !important}';
    document.getElementsByTagName('head')[0].appendChild(style);

    for (let active of document.querySelectorAll(".active")){
        active.style.color = "#ffe375"}

    let headers = document.querySelectorAll('.header-bar')
    for (let header of headers) {
        header.style.backgroundColor = "#24292e";
    }
})();