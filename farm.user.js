// ==UserScript==
// @name         Farm Script
// @namespace    http://tampermonkey.net/
// @version      1.2.3
// @description  Fams selected villages.
// @author       You
// @match        https://*.die-staemme.de/game.php*screen=map*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==




/*
Interessante Variablen:

TWMap
TWMap.villages


*/
(function () {
    'use strict';

    const contentValue = document.querySelector('#content_value');


    let ptr = 0;
    let interval = null;

    function getNextTarget() {

        let TargetBBCodes = targets.value.split('\n').filter((line) => line !== '');
        if (TargetBBCodes.length === 0) {
            return null;
        }

        ptr = ptr % TargetBBCodes.length;

        const BBCode = TargetBBCodes[ptr];

        ptr++;

        return BBCode;
    }

    function getSelectedTemplate() {
        return selectTemplate.value
    }


    function checkIfTroopsAreAvailable() {
        /*
            {
                "spear": "1287",
                "sword": "213",
                "axe": "0",
                "archer": "0",
                "spy": "0",
                "light": "0",
                "marcher": "0",
                "heavy": "50",
                "ram": "0",
                "catapult": "0",
                "knight": "1",
                "snob": "0"
            }
        */
        const currentUnits = TWMap.current_units
        const selectedTemplateId = getSelectedTemplate();
        const selectedTemplate = TroopTemplates.current[selectedTemplateId]
        for(const [k,v] of Object.entries(selectedTemplate)) {
            if(currentUnits[k] < v) {
                return false;
            }
        }

        return true


    }


    function attackVillage(targetVillage, template) {
        const villageId = game_data.village.id;
        const world = game_data.world;

        //const url = `https://${world}.die-staemme.de/game.php?village=${villageId}&screen=place&ajaxaction=popup_command`;
        const url = `https://${world}.die-staemme.de/game.php?t=9225854&village=${villageId}&screen=place&x=511&y=483&spear=0&sword=0&axe=0&archer=0&spy=0&light=0&marcher=0&heavy=0&ram=0&catapult=0&knight=1&snob=0`

        //https://des1.die-staemme.de/game.php?&village=373&screen=place&x=511&y=483&spear=0&sword=0&axe=0&archer=0&spy=0&light=0&marcher=0&heavy=0&ram=0&catapult=0&knight=1&snob=0
        //https://dec1.die-staemme.de/game.php?t=9225854&village=19143&screen=place&target=47995&spear=0&sword=0&axe=0&archer=0&spy=0&light=0&marcher=0&heavy=0&ram=0&catapult=0&knight=&snob=0
    }




    async function startFarming() {
        console.log("start farming");
        interval = setInterval(async () => {

            console.log("checking for next target");
            const target = getNextTarget();
            console.log("next target", target);

            if (target === null || target === '') {
                return;
            }

            // target village is passed like x|y
            // village ids are stored in TWMAP.villages where xy is key
            // id like "32310"
            let xy = target.match(/\d+\|\d+/)[0].split('|').join('');
            let e = TWMap.villages[xy].id;
            CommandPopup.openRallyPoint({
                target: e
            })
         

            while (!checkIfTroopsAreAvailable()) {
                console.log("waiting for troops to be available");
                await sleep(1000);
            }

            // popup should open
            // now select template
            let template = getSelectedTemplate();
            TroopTemplates.useTemplate(template);


            document.getElementById('target_attack').click();


            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
         
            while (!document.getElementById('troop_confirm_submit')) {
                console.log("waiting for troop_confirm_submit");
                await sleep(1000);
            }

            //document.getElementById('troop_confirm_submit').click();



        }, 3000);
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
    const targets = document.createElement('textArea');
    targets.id = 'TargetBBCodes';


    // get troop tampelates
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
    containerDiv.appendChild(targets);
    containerDiv.appendChild(selectTemplate);
    containerDiv.appendChild(toggleButton);
    contentValue.appendChild(containerDiv);

})();