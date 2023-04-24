// ==UserScript==
// @name			2-Klick Dorfgruppenwechsel
// @version			0.2.2
// @description		Fügt in der Menüleiste ein Menü hinzu mit dem die Dorfgruppe gewechselt werden kann.
// @author			ners
// @match			https://*.die-staemme.de/game.php*
// ==/UserScript==

var win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
win.$.ajaxSetup({ cache: true });
win.$.getScript('https://media.innogames.com/com_DS_DE/Scriptdatenbank/userscript_main/700_2-klick_gruppenwechsel_ners.js');