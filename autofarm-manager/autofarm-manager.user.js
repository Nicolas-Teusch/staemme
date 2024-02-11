
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

    let contentContainer = document.getElementById('content_value');

        // create radio buttons to select farm template
        let html = `
        <div style="display: flex; flex-direction: row; gap: 5px;">
            <div name="autofarm" value="A" class="farm_village_17067 farm_icon farm_icon_a" onclick="select('a')"></div>
            <div name="autofarm" value="B" class="farm_village_17067 farm_icon farm_icon_b" onclick="select('b')"></div>
            <div name="autofarm" value="C" class="farm_village_17067 farm_icon farm_icon_c" onclick="select('c')"></div>
            <div type="button" class="btn" id="startStop" onclick="startStop()">Start</div>
        </div>
    `;


    let option = null;
    let isRunning = false;

    let options = document.getElementsByName('autofarm');
    function select(option) {
        console.log(option);
        options.forEach(e => {
            e.style = e.value === option ? null : 'border: 1px solid green';
        });
    }

    function startStop() {
        isRunning = !isRunning;
        let btn = document.getElementById('startStop');
        if(isRunning) {
            start();
            btn.innerHTML = 'Stop';
        }   else {
            stop();
            btn.innerHTML = 'Start';
        }


    }

    contentContainer.innerHTML += html;

})();