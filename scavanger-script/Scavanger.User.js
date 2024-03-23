
// ==UserScript==
// @name         Scavanger Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Used to scavenge.
// @author       You
// @match        https://*.die-staemme.de/game.php?village=*&screen=place&mode=scavenge_mass
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==



(async function () {
    'use strict';


    const config = {
        scavange4h: {
            deff: [
                {
                    spear: 1990,
                },
                {
                    spear: 798,
                },
                {
                    spear: 398,
                },
                {
                    spear: 265,
                }
            ],
            off: [
                {
                    axe: 2000,
                    light: 372,
                },
                {
                    axe: 1990,
                },
                {
                    axe: 994,
                },
                {
                    axe: 663,
                }
            ]
        },
        scavange8h: {
            deff: [
                {
                    spear: 4557,
                },
                {
                    spear: 1827,
                },
                {
                    spear: 911,
                },
                {
                    spear: 607,
                }
            ],
            off: [
                {
                    light: 1422,
                },
                {
                    light: 206,
                    axe: 2900,
                },
                {
                    axe: 2276,
                },
                {
                    axe: 1518,
                }
            ]
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
    }
      
    function reset() {
        let unitInputs = document.querySelectorAll('input.unitsInput')
        for(let i = 0; i < unitInputs.length; i++) {
            unitInputs[i].value = 0;
        }
    }
    
    function modifyDOM() {

        const scavangerTable = document.querySelector('#scavenge_mass_screen table');
    


        //wait until dom is loaded
        if(!(scavangerTable)) {
            console.log("waiting for dom");
            return setTimeout(modifyDOM, 1000);
        } 
        
        scavangerTable.insertAdjacentHTML('afterend', html);

        const s4b = document.querySelector('#s4b')
        const s8b = document.querySelector('#s8b')
        s4b.addEventListener('click', send4h);
        s8b.addEventListener('click', send8h);
    }

    async function send8h() {
        reset();

        // deff
        for(let i = 0; i < 4; i++) {

            for(let key in config.scavange8h.deff[i]) {
                let value = config.scavange8h.deff[i][key];
                document.querySelector(`input[name="${key}"]`).value = value;
                document.querySelector(`input[name="${key}"]`).dispatchEvent(new Event('change'));
            }
            
            document.querySelector(`input[data-option="${i+1}"]`).checked = true;
            const sendButton = document.querySelector('a.btn-send')
            if(sendButton && !sendButton.disabled) {
                sendButton.click();
            }

            await sleep(2000);
            reset();
        }


        // off 
        for(let i = 0; i < 4; i++) {

            for(let key in config.scavange8h.off[i]) {
                let value = config.scavange8h.off[i][key];
                document.querySelector(`input[name="${key}"]`).value = value;
                document.querySelector(`input[name="${key}"]`).dispatchEvent(new Event('change'));
            }

            document.querySelector(`input[data-option="${i+1}"]`).checked = true;
            const sendButton = document.querySelector('a.btn-send')
            if(sendButton && !sendButton.disabled) {
                sendButton.click();
            }

            await sleep(2000);
            reset();
        }
    }



    async function send4h() {
        reset();
        console.log('send4h');

        // deff
        for(let i = 0; i < 4; i++) {

            for(let key in config.scavange4h.deff[i]) {
                console.log(key);
                let value = config.scavange4h.deff[i][key];
                document.querySelector(`input[name="${key}"]`).value = value;
                document.querySelector(`input[name="${key}"]`).dispatchEvent(new Event('change'));
            }

            document.querySelector(`input[data-option="${i+1}"]`).checked = true;
            const sendButton = document.querySelector('a.btn-send')
            if(sendButton && !sendButton.disabled) {
                sendButton.click();
            }

            await sleep(2000);
            reset();
        }

        // off 
        for(let i = 0; i < 4; i++) {

            for(let key in config.scavange4h.off[i]) {
                let value = config.scavange4h.off[i][key];
                document.querySelector(`input[name="${key}"]`).value = value;
            }

            document.querySelector(`input[data-option="${i+1}"]`).checked = true;
            const sendButton = document.querySelector('a.btn-send')
            if(sendButton && !sendButton.disabled) {
                sendButton.click();
            }

            await sleep(2000);
            reset();
        }
    }

    const html = `

        <tr>
            <td><button id="s4b" class="btn btn-default btn-send">Scavange 4h</button></td>
            <td><button id="s8b" class="btn btn-default btn-send">Scavange 8h</button></td>
        </tr>
    `;


    
    window.onload = () => 
    {
        modifyDOM();
    } 
})();

