// ==UserScript==
// @name         My new bot
// @namespace    http://tampermonkey.net/
// @version      2024-05-18
// @description  try to take over the world!
// @author       Bondar Natalia
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let searchInput = document.getElementsByName("q")[0];
let links = document.links;
let searchBtn = document.getElementById("search_icon");
let keyWords = ["Базовые вещи про GIT", "10 самых популярных шрифтов от Google",
                "Отключение редакций и ревизий", "Webpack, Parcel и Rollup",
                "Вывод произвольных типов записей и полей"];
let keyWord = keyWords[getRandom(0, keyWords.length)];

if(searchBtn !== null) {
    let i = 0;
    let timerId = setInterval(()=> {
        searchInput.value += keyWord[i];
        i++;
        if (i == keyWord.length) {
            clearInterval(timerId);
            searchBtn.click();
        }
    }, 500);
}
else if (location.hostname == "napli.ru") {
    console.log("Мы на napli.ru!");

    setInterval(()=> {
        let index = getRandom(0, links.length);
        let localLink = links[index];

        if(getRandom(0, 101) > 75) {
            location.href = "https://www.bing.com/";
        }

        if(localLink.href.includes("napli.ru")) {
            localLink.click();
        }
    }, getRandom(2000, 4000))
}
else if (document.querySelector(".b_scopebar") !== null) {
    let nextBingPage = true;
    for (let i = 0; i < links.length; i++) {
        if(links[i].href.indexOf("napli.ru") != -1) {
            let link = links[i];
            nextBingPage = false;
            console.log("Нашел строку" + links[i]);
            setTimeout(()=> {
                link.click();
            }, getRandom(3000, 5000));
            break;
        }
    }
    if(document.querySelector(".sb_pagS").innerText == "5") {
        nextBingPage = false;
        location.href = "https://www.bing.com/";
    }
    if (nextBingPage) {
        setTimeout(()=> {
            document.querySelector(".sb_pagN").click();
        }, getRandom(2000, 4000));
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




