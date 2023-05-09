
// ==UserScript==
// @name         Attack Manager
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Builds up your village.
// @author       You
// @match        https://*.die-staemme.de/game.php?village=*&screen=overview_villages
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

window.OMNIControl = {
     "minFreeStoragePercentage": 10,
 "minFreePopulationPercentage": 10,
 "maxMainBuildLevel": 20,
 "maxMarketBuildLevel": 20,
 "priorityWall": false,
 "nextRefresh": null
}

function getIncomingsTable() {
    return document.getElementById('incomings_table');
}

const tstIncomingRow = `<tr style="white-space:nowrap" class="nowrap  row_a">
	<td>
		<input name="command_ids[542686478]" type="hidden" value="true">
		<input name="id_542686478" type="checkbox">
        <span class="quickedit" data-id="542686478">
            <span class="quickedit-content" style="display: none;">
                <a href="/game.php?village=20548&amp;screen=info_command&amp;id=542686478&amp;type=other">
                    <span class="icon-container">
                        <span class="command_hover_details" data-command-id="542686478" data-icon-hint="Kleiner Angriff (1-1000 Truppen)" data-command-type="attack" data-title="">
	<img src="https://dsde.innogamescdn.com/asset/0b193151/graphic/command/attack_small.png" alt="">
</span>                    </span>
                    <span class="quickedit-label">
                         Angriff                    </span>
                </a>
                <a class="rename-icon" href="#" data-title="Umbenennen"></a>
            </span>
        <span class="quickedit-edit"><input type="text" style="width: 80px;"><input type="button" class="btn" value="Umbenennen"></span></span>
	</td>
	<td>
		<a href="/game.php?village=20137&amp;screen=overview">006 XellentDEs Dorf (360|490) K43</a>
	</td>
	<td>
			<a href="/game.php?village=20548&amp;screen=info_village&amp;id=20548">003 XellentDEs Dorf (361|490) K43</a>
	</td>
	<td>
		<a href="/game.php?village=20548&amp;screen=info_player&amp;id=1577335560">XellentDE</a>
	</td>
    <td>
        1    </td>
	<td>
					heute um 17:37:23:<span class="grey small">289</span>				</td><td><span class="">0:19:20</span></td>
	</tr>`

function parseIncoming(incomingRow) {
    let incoming = {
        source: '',
        destination: '',
        player: '',
        distance: '',
        arrivalFixed: '',
        arrivalDynamic: ''
    }
}

function parseIncomingsTable(incomingsTable) {
    let allRows = incomingsTable.querySelectorAll("tr");

    for(let i = 1; i < allRows.length - 1; i++) {
        console.log(incomings[i])
    }
}

function getIncomings() {
    let incomingsTable = getIncomingsTable();
    let incomings = parseIncomingsTable(incomingsTable);
}


function rename(name) {
    
}

})();