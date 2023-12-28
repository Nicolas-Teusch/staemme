// ==UserScript==
// @name         Farm Script
// @namespace    http://tampermonkey.net/
// @version      1.2.2
// @description  Fams selected villages.
// @author       You
// @match        https://*.die-staemme.de/game.php?village=*&screen=main
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==





fetch("https://des1.die-staemme.de/game.php?village=1326&screen=place&ajaxaction=popup_command", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en,de-DE;q=0.9,de;q=0.8,en-DE;q=0.7,ru-RU;q=0.6,ru;q=0.5,en-US;q=0.4",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "tribalwars-ajax": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://des1.die-staemme.de/game.php?village=1326&screen=map",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "attack=true&ch=cf97796acf627ce342928fd98d396ec2%3A5865f2a6dedad9bac5e5ec96fd5aa8a59a3b72986c294eda59604d3a9cc3b6f4&cb=troop_confirm_submit&x=463&y=503&source_village=1326&village=1326&attack_name=&spear=44&sword=28&axe=0&spy=0&light=0&heavy=0&ram=0&catapult=0&knight=0&snob=0&building=main&h=ca7b3bd6&h=ca7b3bd6",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


const contentValue = document.querySelector('#content_value');

let TargetBBCodes = [];
let ptr = 0;
let interval = null;

function getNextTarget() {
    if (TargetBBCodes
        .length === 0) {
        return null;
    }

    const BBCode = TargetBBCodes
    [ptr];
    ptr = (ptr + 1) % TargetBBCodes
    .length;
    return BBCode;
}




function startFarming() {
    console.log("start farming");
    interval = setInterval(() => { 

        console.log("checking for next target");
        const target = getNextTarget();
        if (target === null) {
            return;
        }
    
        
    
    }, 1000);
}

function stopFarming() {
    if (interval !== null) {
        clearInterval(interval);
    }

}

//heading
const heading = document.createElement('h2');
heading.textContent = 'Paste BB Code to Farm villages:';

// adding text area to conent value
const textArea = document.createElement('textarea');
textArea.id = 'TargetBBCodes';


// get troot tampelates
const templates = document.querySelector('#troop_template_selection').innerHTML;

// select template option
const selectTemplate = document.createElement('select');
selectTemplate.id = 'selectTemplate';
selectTemplate.innerHTML = templates;


// toggle button start/stop farming
const toggleButton = document.createElement('button');
toggleButton.id = 'toggleButton';
toggleButton.textContent = 'Start Farming';
toggleButton.onclick = () => {
    if (toggleButton.textContent === 'Start Farming') {
        toggleButton.textContent = 'Stop Farming';
        startFarming();
    } else {
        toggleButton.textContent = 'Start Farming';
        stopFarming();
    }
}


// adding heading and text area to content value
contentValue.appendChild(heading);
contentValue.appendChild(textArea);
contentValue.appendChild(selectTemplate);
contentValue.appendChild(toggleButton);

