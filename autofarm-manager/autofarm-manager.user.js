
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
    let timer = null;
    function select(div, o) {
        console.log(0);
        option = o;
        let options = document.getElementsByName('autofarm');
        options.forEach(e => {
            e.style = null;
        });

        div.style = 'box-shadow: 0 0 10px #32cd4b;'
    }




    function farm() {
        console.log('farming');
        console.log(option);

        let targetCounter = 2;
        let plunderList = document.getElementById('plunder_list');
        let targets = plunderList.getElementsByTagName('tr');
        
        //skip invalid targets
        let target = null;
        for(const element of targets) {
            if(element.getElementsByClassName('farm_icon_' + option)[0].style['display'] === 'none') {
                continue;
            } else {
                target = element;
                break;
            }
        }

        if(target === null) {
            console.log('No valid targets');
            return;
        }
        console.log(target);
        let btn = target.getElementsByClassName('farm_icon_' + option)[0];

        if(btn.classList.contains('farm_icon_disabled')) {
            console.log('Farming this target is disabled');
            return;
        }

        if (btn) {
            console.log('clicking button');
            btn.click();
        }
    }

    function startStop(e) {
        e.preventDefault();

        isRunning = !isRunning;
        let btn = document.getElementById('startStop');
        if (isRunning) {
            timer = setInterval(farm, Math.random() * 3000 + 1000);
            btn.innerHTML = 'Stop';
        } else {
            clearInterval(timer);
            btn.innerHTML = 'Start';
        }
    }


    let container = document.createElement('div');
    container.style = 'display: flex; flex-direction: row; gap: 5px;';

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.setAttribute('name', 'autofarm');
        div.classList.add('farm_village_17067');
        div.classList.add('farm_icon');
        div.classList.add('farm_icon_' + String.fromCharCode(97 + i));
        div.onclick = () => {
            select(div, String.fromCharCode(97 + i));
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