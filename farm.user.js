// ==UserScript==
// @name         Farm Script
// @namespace    http://tampermonkey.net/
// @version      1.2.2
// @description  Fams selected villages.
// @author       You
// @match        https://*.die-staemme.de/game.php*screen=map*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

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


const containerDiv = document.createElement('div');
containerDiv.style = 'display: flex; flex-direction: column; align-items: flex-start;';

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



containerDiv.appendChild(heading);
containerDiv.appendChild(textArea);
containerDiv.appendChild(selectTemplate);
containerDiv.appendChild(toggleButton);
contentValue.appendChild(containerDiv);

})();