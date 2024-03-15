
// ==UserScript==
// @name         Scavaner Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Used to scavenge.
// @author       You
// @match        https://*.die-staemme.de/game.php?village=*&screen=place&mode=scavenge_mass
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==



(function () {
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

    function send8h() {

        // deff
        for(let i = 0; i < 4; i++) {
            document.querySelector('input[name="spear"]').value = config.scavange8h.deff[i].spear;
            document.querySelector(`input[data-option="${i}"]`).checked = true;
            document.querySelector('a.btn-send').click();
        }


        // off 
        for(let i = 0; i < 4; i++) {
            document.querySelector('input[name="spear"]').value = config.scavange8h.off[i].spear;
            document.querySelector(`input[data-option="${i}"]`).checked = true;
            document.querySelector('a.btn-send').click();
        }
    }

    function send4h() {
        for(let i = 0; i < 4; i++) {
            document.querySelector('input[name="spear"]').value = config.scavange4h.deff[i].spear;
            document.querySelector(`input[data-option="${i}"]`).checked = true;
            document.querySelector('a.btn-send').click();
        }

        // off 
        for(let i = 0; i < 4; i++) {
            document.querySelector('input[name="spear"]').value = config.scavange4h.off[i].spear;
            document.querySelector(`input[data-option="${i}"]`).checked = true;
            document.querySelector('a.btn-send').click();
        }
    }

    let html = `

        <tr>
            <td><a href="#" class="btn btn-default btn-send" onclick="send4h" >Scavange 4h</a></td>
            <td><a href="#" class="btn btn-default btn-send" onclick="send8h">Scavange 8h</a></td>
        </tr>
    `;


    let candidateSquadWidget = document.querySelector('#scavenge_mass_screen table')
    candidateSquadWidget.insertAdjacentHTML('afterend', html);

})();