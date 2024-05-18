// ==UserScript==
// @name         My new bot
// @namespace    http://tampermonkey.net/
// @version      2024-05-18
// @description  try to take over the world!
// @author       Bondar Natalia
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let input = document.getElementsByName("q")[0];
let links = document.links;
let searchBtn = document.getElementById("search_icon");
let keyWords = ["Базовые вещи про GIT", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyWord = keyWords[getRandom(0, keyWords.length)];

if(searchBtn !== null) {
    input.value = keyWord;
    searchBtn.click();
} else {
    for (let i = 0; i < links.length; i++) {
        if(links[i].href.indexOf("napli.ru") != -1) {
            let link = links[i];
            console.log("Нашел строку" + links[i]);
            link.click();
            break;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
