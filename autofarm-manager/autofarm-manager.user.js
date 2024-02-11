
// ==UserScript==
// @name         Attack Manager Farmmanager
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Farms automatically using farm manager.
// @author       Xellent_DE
// @match        https://*.die-staemme.de/game.php?village=*&screen=am_farm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    let option = null;
    let isRunning = false;
    let contentContainer = document.getElementById('content_value');
    function select(option) {
        console.log(option);
        let options = document.getElementsByName('autofarm');
        options.forEach(e => {
            e.style = e.value === option ? null : 'border: 1px solid green';
        });
    }

    function startStop(e) {
        e.preventDefault();
        
        isRunning = !isRunning;
        let btn = document.getElementById('startStop');
        if (isRunning) {
            start();
            btn.innerHTML = 'Stop';
        } else {
            stop();
            btn.innerHTML = 'Start';
        }
    }


    let container = document.createElement('div');
    container.style = 'display: flex; flex-direction: column; gap: 5px;';

    for(let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.classList.add('farm_village_17067');
        div.classList.add('farm_icon');
        div.classList.add('farm_icon_' + String.fromCharCode(97 + i));
        div.onclick = () => {
            select(String.fromCharCode(97 + i));
        }

        container.appendChild(div);
    }

    let startStopBtn = document.createElement('button');
    startStopBtn.id = 'startStop';
    startStopBtn.innerHTML = 'Start';
    startStopBtn.onclick = startStop;
    startStopBtn.classList.add('btn');
    container.appendChild(startStopBtn);


    contentContainer.appendChild(container);

})();