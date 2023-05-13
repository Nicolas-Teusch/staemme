
// ==UserScript==
// @name         Build Script
// @namespace    http://tampermonkey.net/
// @version      1.2.2
// @description  Builds up your village.
// @author       You
// @match        https://*.die-staemme.de/game.php?village=*&screen=main
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.OMNIControl = {
        "traverseVillages": true,
        "minFreeStoragePercentage": 10,
        "minFreePopulationPercentage": 10,
        "maxMainBuildLevel": 20,
        "maxMarketBuildLevel": 20,
        "priorityWall": false,
        "nextRefresh": null,
    }

    

    function loadStorage() {

        if (!localStorage) {
            return {}
        }


        let jsonString = localStorage.getItem('OMNIcontrol');

        return JSON.parse(jsonString)
    }

    function saveStorage(jsonObject) {
        let jsonString = JSON.stringify(jsonObject);
        localStorage.setItem('OMNIcontrol', jsonString);

    }

    function clearStoredConfig() {
        localStorage.removeItem('OMNIcontrol');
    }

    const ids = {
        "main": "main",
        "barracks": "barracks",
        "stable": "stable",
        "garage": "garage",
        "snob": "snob",
        "smith": "smith",
        "place": "place",
        "statue": "statue",
        "market": "market",
        "wood": "wood",
        "stone": "stone",
        "iron": "iron",
        "farm": "farm",
        "storage": "storage",
        "hide": "hide",
        "wall": "wall",
    }

    const screenIds = {
        "main": 'main'
    }



    const minFreeStoragePercentage = 10;
    const minFreePopulationPercentage = 10;
    const maxMainBuildLevel = 20;
    const maxMarketBuildLevel = 20;
    let priorityWall = false;
    

    function storageIsLow() {
        const c = getCurrentRessources();

        return 100 - 100 * c.wood / c.storage < minFreeStoragePercentage || 100 - 100 * c.stone / c.storage < minFreeStoragePercentage || 100 - 100 * c.iron / c.storage < minFreeStoragePercentage
    }

    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }

    function getNextPageRefresh() {
        const now = new Date();
        //const randomMinutes = 10 + Math.floor(Math.random() * 6)
        const randomMinutes = 1 + Math.floor(Math.random() * 2)
        return addMinutes(now, randomMinutes)
    }

    function setNextPageRefreshInMinutes(minutes) {
        const now = new Date();
        const nextRefresh =  addMinutes(now, + minutes);
        window.OMNIControl.nextRefresh = nextRefresh;

        return nextRefresh;
    }

    function getGameData() {
        return document ? game_data : {
            "player": {
                "id": 1577335560,
                "name": "XellentDE",
                "ally": "0",
                "ally_level": null,
                "ally_member_count": null,
                "sitter": "0",
                "sleep_start": "0",
                "sitter_type": "normal",
                "sleep_end": "0",
                "sleep_last": "0",
                "email_valid": "1",
                "villages": "5",
                "incomings": "0",
                "supports": "0",
                "knight_location": null,
                "knight_unit": null,
                "rank": 689,
                "points": "4899",
                "date_started": "1682078120",
                "is_guest": "0",
                "confirmation_skipping_hash": "",
                "quest_progress": "0",
                "points_formatted": "4<span class=\"grey\">.</span>899",
                "rank_formatted": "689",
                "pp": "2840",
                "new_ally_application": 0,
                "new_ally_invite": "0",
                "new_buddy_request": "0",
                "new_daily_bonus": "0",
                "new_forum_post": 0,
                "new_post_notification": 0,
                "new_igm": "0",
                "new_items": "0",
                "new_report": "0",
                "new_quest": "1"
            },
            "quest": {
                "use_questlines": true
            },
            "features": {
                "Premium": {
                    "possible": true,
                    "active": true
                },
                "AccountManager": {
                    "possible": true,
                    "active": false
                },
                "FarmAssistent": {
                    "possible": false,
                    "active": false
                }
            },
            "village": {
                "id": 20550,
                "name": "XellentDEs Dorf 5",
                "display_name": "XellentDEs Dorf 5 (356|493) K43",
                "wood": 2493,
                "wood_prod": 1.0118986388682,
                "wood_float": 2493.754682013312,
                "stone": 954,
                "stone_prod": 0.86998791305672,
                "stone_float": 954.2715452118172,
                "iron": 7409,
                "iron_prod": 0.64308093312704,
                "iron_float": 7409.958301337511,
                "pop": 587,
                "pop_max": 2216,
                "x": 356,
                "y": 493,
                "trader_away": 0,
                "storage_max": 14670,
                "bonus_id": null,
                "bonus": null,
                "buildings": {
                    "main": "13",
                    "barracks": "10",
                    "stable": "7",
                    "garage": "3",
                    "snob": "0",
                    "smith": "12",
                    "place": "1",
                    "market": "1",
                    "wood": "19",
                    "stone": "18",
                    "iron": "16",
                    "farm": "15",
                    "storage": "14",
                    "wall": "0"
                },
                "player_id": 1577335560,
                "modifications": 0,
                "points": 931,
                "last_res_tick": 1682150246018.8,
                "coord": "356|493",
                "is_farm_upgradable": true
            },
            "nav": {
                "parent": 2
            },
            "link_base": "/game.php?village=20550&amp;screen=",
            "link_base_pure": "/game.php?village=20550&screen=",
            "csrf": "ab374b1b",
            "world": "dec1",
            "market": "de",
            "RTL": false,
            "version": "cd1a0cc7 release_8.316\n",
            "majorVersion": "8.316",
            "screen": "main",
            "mode": null,
            "device": "desktop",
            "pregame": false,
            "units": [
                "spear",
                "sword",
                "axe",
                "archer",
                "spy",
                "light",
                "marcher",
                "heavy",
                "ram",
                "catapult",
                "snob"
            ],
            "locale": "de_DE",
            "group_id": "0",
            "time_generated": 1682149859299
        }
    }

    async function avoidBotProtection() {
        let chkBox = document.getElementById('checkbox');

        //if checkbox is not present no bot-protection is active.
        if (!chkBox)
            return;

        setTimeout(() => {

            chkBox.click();

        }), Math.floor(Math.random() * 5000);
    }


    function getBuildingMain() {
        return BuildingMain ? BuildingMain : {
            "BUILD_ERROR_REQ": 1,
            "BUILD_ERROR_POP": 2,
            "BUILD_ERROR_QUEUE": 3,
            "BUILD_ERROR_RES": 4,
            "BUILD_ERROR_QUEUE_RES": 5,
            "upgrade_building_link": "/game.php?village=20548&screen=main&ajaxaction=upgrade_building&type=main&h=ab374b1b",
            "downgrade_building_link": "/game.php?village=20548&screen=main&ajaxaction=downgrade_building&type=main&h=ab374b1b",
            "link_reduce_buildtime": "",
            "link_cancel": "/game.php?village=20548&screen=main&ajaxaction=cancel_order&type=main&h=ab374b1b",
            "confirm_queue": false,
            "mode": 0,
            "request_id": 0,
            "last_request_id": 0,
            "buildings": {
                "main": {
                    "id": "main",
                    "image": "buildings/main.png",
                    "max_level": 30,
                    "min_level": 1,
                    "image_levels": [
                        5,
                        15
                    ],
                    "req": [],
                    "require": [],
                    "wood": 1816,
                    "stone": 1882,
                    "iron": 1412,
                    "pop": 5,
                    "wood_factor": 1.26,
                    "stone_factor": 1.275,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 1380,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 10,
                    "level": "13",
                    "level_next": 14,
                    "link": "/game.php?village=20548&amp;screen=main",
                    "can_build": true,
                    "big_image": "main2",
                    "wood_queue_factor": 1816,
                    "stone_queue_factor": 1882,
                    "iron_queue_factor": 1412,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=main&amp;type=main&amp;h=ab374b1b",
                    "name": "Hauptgebäude",
                    "text": "Im Hauptgebäude können neue Gebäude errichtet oder vorhandene Gebäude verbessert werden. Je höher die Stufe, desto schneller können neue Gebäude errichtet werden. Sobald dein Hauptgebäude Stufe 15 erreicht hat und die Zustimmung bei 100% liegt, bist du in der Lage Gebäude abzureißen."
                },
                "barracks": {
                    "id": "barracks",
                    "image": "buildings/barracks.png",
                    "max_level": 25,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        20
                    ],
                    "req": {
                        "main": 3
                    },
                    "require": {
                        "main": {
                            "level": 3,
                            "name": "Hauptgebäude",
                            "image": "buildings/main.png",
                            "big_image": "main1",
                            "met": true
                        }
                    },
                    "wood": 2017,
                    "stone": 2007,
                    "iron": 908,
                    "pop": 5,
                    "wood_factor": 1.26,
                    "stone_factor": 1.28,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 1470,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 16,
                    "level": "10",
                    "level_next": 11,
                    "link": "/game.php?village=20548&amp;screen=barracks",
                    "can_build": true,
                    "big_image": "barracks2",
                    "wood_queue_factor": 2017,
                    "stone_queue_factor": 2007,
                    "iron_queue_factor": 908,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=barracks&amp;type=main&amp;h=ab374b1b",
                    "name": "Kaserne",
                    "text": "In der Kaserne kannst du Infanterie rekrutieren. Je höher die Ausbaustufe der Kaserne ist, desto schneller werden deine Truppen rekrutiert."
                },
                "stable": {
                    "id": "stable",
                    "image": "buildings/stable.png",
                    "max_level": 20,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        10
                    ],
                    "req": {
                        "main": 10,
                        "barracks": 5,
                        "smith": 5
                    },
                    "require": {
                        "main": {
                            "level": 10,
                            "name": "Hauptgebäude",
                            "image": "buildings/main.png",
                            "big_image": "main2",
                            "met": true
                        },
                        "barracks": {
                            "level": 5,
                            "name": "Kaserne",
                            "image": "buildings/barracks.png",
                            "big_image": "barracks2",
                            "met": true
                        },
                        "smith": {
                            "level": 5,
                            "name": "Schmiede",
                            "image": "buildings/smith.png",
                            "big_image": "smith2",
                            "met": true
                        }
                    },
                    "wood": 1361,
                    "stone": 1351,
                    "iron": 1311,
                    "pop": 3,
                    "wood_factor": 1.26,
                    "stone_factor": 1.28,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 2326,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 20,
                    "level": "7",
                    "level_next": 8,
                    "link": "/game.php?village=20548&amp;screen=stable",
                    "can_build": true,
                    "big_image": "stable2",
                    "wood_queue_factor": 1361,
                    "stone_queue_factor": 1351,
                    "iron_queue_factor": 1311,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=stable&amp;type=main&amp;h=ab374b1b",
                    "name": "Stall",
                    "text": "Im Stall kannst du Reiter ausbilden. Je höher die Ausbaustufe des Stalls ist, desto schneller werden deine Truppen rekrutiert."
                },
                "garage": {
                    "id": "garage",
                    "image": "buildings/garage.png",
                    "max_level": 15,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        10
                    ],
                    "req": {
                        "main": 10,
                        "smith": 10
                    },
                    "require": {
                        "main": {
                            "level": 10,
                            "name": "Hauptgebäude",
                            "image": "buildings/main.png",
                            "big_image": "main2",
                            "met": true
                        },
                        "smith": {
                            "level": 10,
                            "name": "Schmiede",
                            "image": "buildings/smith.png",
                            "big_image": "smith2",
                            "met": true
                        }
                    },
                    "wood": 756,
                    "stone": 644,
                    "iron": 655,
                    "pop": 2,
                    "wood_factor": 1.26,
                    "stone_factor": 1.28,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 761,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 24,
                    "level": "4",
                    "level_next": 5,
                    "link": "/game.php?village=20548&amp;screen=garage",
                    "can_build": true,
                    "big_image": "garage1",
                    "wood_queue_factor": 756,
                    "stone_queue_factor": 644,
                    "iron_queue_factor": 655,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=garage&amp;type=main&amp;h=ab374b1b",
                    "name": "Werkstatt",
                    "text": "In der Werkstatt kannst du Belagerungswaffen herstellen. Je höher die Ausbaustufe der Werkstatt ist, desto schneller werden deine Truppen rekrutiert."
                },
                "smith": {
                    "id": "smith",
                    "image": "buildings/smith.png",
                    "max_level": 20,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        15
                    ],
                    "req": {
                        "main": 5,
                        "barracks": 1
                    },
                    "require": {
                        "main": {
                            "level": 5,
                            "name": "Hauptgebäude",
                            "image": "buildings/main.png",
                            "big_image": "main2",
                            "met": true
                        },
                        "barracks": {
                            "level": 1,
                            "name": "Kaserne",
                            "image": "buildings/barracks.png",
                            "big_image": "barracks1",
                            "met": true
                        }
                    },
                    "wood": 3523,
                    "stone": 3322,
                    "iron": 3843,
                    "pop": 20,
                    "wood_factor": 1.26,
                    "stone_factor": 1.275,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 7512,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 19,
                    "level": "12",
                    "level_next": 13,
                    "link": "/game.php?village=20548&amp;screen=smith",
                    "can_build": true,
                    "big_image": "smith2",
                    "wood_queue_factor": 3523,
                    "stone_queue_factor": 3322,
                    "iron_queue_factor": 3843,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=smith&amp;type=main&amp;h=ab374b1b",
                    "name": "Schmiede",
                    "text": "In der Schmiede werden Waffen erforscht und verbessert. Je höher die Ausbaustufe der Schmiede, desto bessere Waffen kannst du erforschen. Außerdem wird die Forschungszeit verringert."
                },
                "place": {
                    "id": "place",
                    "image": "buildings/place.png",
                    "max_level": 1,
                    "min_level": 0,
                    "image_levels": [],
                    "req": [],
                    "require": [],
                    "wood": 13,
                    "stone": 51,
                    "iron": 38,
                    "pop": 0,
                    "wood_factor": 1.26,
                    "stone_factor": 1.275,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 11,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 0,
                    "level": "1",
                    "level_next": 2,
                    "link": "/game.php?village=20548&amp;screen=place",
                    "can_build": true,
                    "big_image": "place1",
                    "wood_queue_factor": 13,
                    "stone_queue_factor": 51,
                    "iron_queue_factor": 38,
                    "complete": true,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=place&amp;type=main&amp;h=ab374b1b",
                    "name": "Versammlungsplatz",
                    "text": "Auf dem Versammlungsplatz treffen sich deine Krieger. Hier kannst du Angriffsbefehle erteilen und Truppen verlagern."
                },
                "market": {
                    "id": "market",
                    "image": "buildings/market.png",
                    "max_level": 25,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        20
                    ],
                    "req": {
                        "main": 3,
                        "storage": 2
                    },
                    "require": {
                        "main": {
                            "level": 3,
                            "name": "Hauptgebäude",
                            "image": "buildings/main.png",
                            "big_image": "main1",
                            "met": true
                        },
                        "storage": {
                            "level": 2,
                            "name": "Speicher",
                            "image": "buildings/storage.png",
                            "big_image": "storage1",
                            "met": true
                        }
                    },
                    "wood": 126,
                    "stone": 128,
                    "iron": 126,
                    "pop": 3,
                    "wood_factor": 1.26,
                    "stone_factor": 1.275,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 3,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 10,
                    "level": "1",
                    "level_next": 2,
                    "link": "/game.php?village=20548&amp;screen=market",
                    "can_build": true,
                    "big_image": "market1",
                    "wood_queue_factor": 126,
                    "stone_queue_factor": 128,
                    "iron_queue_factor": 126,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=market&amp;type=main&amp;h=ab374b1b",
                    "name": "Marktplatz",
                    "text": "Auf dem Marktplatz kannst du mit anderen Spielern Handel betreiben oder ihnen Rohstoffe schicken."
                },
                "wood": {
                    "id": "wood",
                    "image": "buildings/wood.png",
                    "max_level": 30,
                    "min_level": 0,
                    "image_levels": [
                        10,
                        20
                    ],
                    "req": [],
                    "require": [],
                    "wood": 5421,
                    "stone": 9860,
                    "iron": 3987,
                    "pop": 14,
                    "wood_factor": 1.25,
                    "stone_factor": 1.275,
                    "iron_factor": 1.245,
                    "pop_factor": 1.155,
                    "build_time": 6147,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 6,
                    "level": "19",
                    "level_next": 22,
                    "link": "/game.php?village=20548&amp;screen=wood",
                    "can_build": true,
                    "big_image": "wood2",
                    "error": "Genug Rohstoffe heute um 12:25",
                    "wood_queue_factor": 5421,
                    "stone_queue_factor": 9860,
                    "iron_queue_factor": 3987,
                    "name": "Holzfällerlager",
                    "text": "Deine Holzfäller schlagen in den dichten Wäldern außerhalb deines Dorfes das Holz, das sowohl für den Aufbau deiner Siedlung als auch für die Bewaffnung deines Heeres benötigt wird. Je höher die Ausbaustufe des Holzfällerlagers, desto mehr Holz kann produziert werden."
                },
                "stone": {
                    "id": "stone",
                    "image": "buildings/stone.png",
                    "max_level": 30,
                    "min_level": 0,
                    "image_levels": [
                        10,
                        20
                    ],
                    "req": [],
                    "require": [],
                    "wood": 6098,
                    "stone": 4352,
                    "iron": 2383,
                    "pop": 15,
                    "wood_factor": 1.27,
                    "stone_factor": 1.265,
                    "iron_factor": 1.24,
                    "pop_factor": 1.14,
                    "build_time": 4288,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 6,
                    "level": "18",
                    "level_next": 20,
                    "link": "/game.php?village=20548&amp;screen=stone",
                    "can_build": true,
                    "big_image": "stone2",
                    "wood_queue_factor": 6098,
                    "stone_queue_factor": 4352,
                    "iron_queue_factor": 2383,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=stone&amp;type=main&amp;h=ab374b1b",
                    "name": "Lehmgrube",
                    "text": "In der Lehmgrube fördern deine Arbeiter den für den Aufbau deines Dorfes wichtigen Lehm. Je höher die Ausbaustufe, desto mehr Lehm wird gefördert."
                },
                "iron": {
                    "id": "iron",
                    "image": "buildings/iron.png",
                    "max_level": 30,
                    "min_level": 0,
                    "image_levels": [
                        10,
                        20
                    ],
                    "req": [],
                    "require": [],
                    "wood": 2734,
                    "stone": 3170,
                    "iron": 2187,
                    "pop": 18,
                    "wood_factor": 1.252,
                    "stone_factor": 1.275,
                    "iron_factor": 1.24,
                    "pop_factor": 1.17,
                    "build_time": 2958,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 6,
                    "level": "16",
                    "level_next": 17,
                    "link": "/game.php?village=20548&amp;screen=iron",
                    "can_build": true,
                    "big_image": "iron2",
                    "wood_queue_factor": 2734,
                    "stone_queue_factor": 3170,
                    "iron_queue_factor": 2187,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=iron&amp;type=main&amp;h=ab374b1b",
                    "name": "Eisenmine",
                    "text": "In der Eisenmine schürfen deine Arbeiter das kriegsentscheidende Eisen. Je höher die Ausbaustufe der Eisenmine, desto mehr Eisen wird produziert."
                },
                "farm": {
                    "id": "farm",
                    "image": "buildings/farm.png",
                    "max_level": 30,
                    "min_level": 1,
                    "image_levels": [
                        10,
                        20
                    ],
                    "req": [],
                    "require": [],
                    "wood": 2303,
                    "stone": 2574,
                    "iron": 1368,
                    "pop": 0,
                    "wood_factor": 1.3,
                    "stone_factor": 1.32,
                    "iron_factor": 1.29,
                    "pop_factor": 1,
                    "build_time": 2719,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 5,
                    "level": "15",
                    "level_next": 16,
                    "link": "/game.php?village=20548&amp;screen=farm",
                    "can_build": true,
                    "big_image": "farm2",
                    "wood_queue_factor": 2303,
                    "stone_queue_factor": 2574,
                    "iron_queue_factor": 1368,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=farm&amp;type=main&amp;h=ab374b1b",
                    "name": "Bauernhof",
                    "text": "Der Bauernhof versorgt deine Arbeiter und Truppen mit Nahrung. Ohne Ausbau des Bauernhofs kann dein Dorf nicht wachsen. Je höher die Ausbaustufe des Bauernhofs, desto mehr Bewohner können versorgt werden."
                },
                "storage": {
                    "id": "storage",
                    "image": "buildings/storage.png",
                    "max_level": 30,
                    "min_level": 1,
                    "image_levels": [
                        10,
                        20
                    ],
                    "req": [],
                    "require": [],
                    "wood": 2580,
                    "stone": 2290,
                    "iron": 1333,
                    "pop": 0,
                    "wood_factor": 1.265,
                    "stone_factor": 1.27,
                    "iron_factor": 1.245,
                    "pop_factor": 1.15,
                    "build_time": 2794,
                    "build_time_factor": 1.2,
                    "build_time_min": 10,
                    "points": 6,
                    "level": "16",
                    "level_next": 17,
                    "link": "/game.php?village=20548&amp;screen=storage",
                    "can_build": true,
                    "big_image": "storage2",
                    "wood_queue_factor": 2580,
                    "stone_queue_factor": 2290,
                    "iron_queue_factor": 1333,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=storage&amp;type=main&amp;h=ab374b1b",
                    "name": "Speicher",
                    "text": "Im Speicher können die von deinem Dorf produzierten Rohstoffe gelagert werden. Je höher die Ausbaustufe des Speichers, desto mehr Rohstoffe können eingelagert werden."
                },
                "wall": {
                    "id": "wall",
                    "image": "buildings/wall.png",
                    "max_level": 20,
                    "min_level": 0,
                    "image_levels": [
                        5,
                        15
                    ],
                    "req": {
                        "barracks": 1
                    },
                    "require": {
                        "barracks": {
                            "level": 1,
                            "name": "Kaserne",
                            "image": "buildings/barracks.png",
                            "big_image": "barracks1",
                            "met": true
                        }
                    },
                    "wood": 50,
                    "stone": 100,
                    "iron": 20,
                    "pop": 5,
                    "wood_factor": 1.26,
                    "stone_factor": 1.275,
                    "iron_factor": 1.26,
                    "pop_factor": 1.17,
                    "build_time": 60,
                    "build_time_factor": 1.2,
                    "build_time_min": 240,
                    "points": 8,
                    "level": "0",
                    "level_next": 1,
                    "link": "/game.php?village=20548&amp;screen=wall",
                    "can_build": true,
                    "big_image": "wall1",
                    "wood_queue_factor": 50,
                    "stone_queue_factor": 100,
                    "iron_queue_factor": 20,
                    "build_link": "/game.php?village=20548&amp;screen=main&amp;action=upgrade_building&amp;id=wall&amp;type=main&amp;h=ab374b1b",
                    "name": "Wall",
                    "text": "Der Wall verteidigt dein Dorf gegen die Truppen deiner Feinde. Je höher dessen Stufe, desto besser die Grundverteidigung deines Dorfes. Er erhöht auch die Verteidigungsstärke der im Dorf stationierten Truppen."
                }
            },
            "order_count": 3,
            "is_buildability_initialized": true,
            "web_push": {},
            "res_schedule": {
                "time_generated": 1682153145698,
                "rates": {
                    "schedules": {
                        "wood": {
                            "1682149754": "1.0118986388682",
                            "1682154041": "1.1769575645547",
                            "1682162752": "1.3689405791789"
                        },
                        "stone": {
                            "1682149754": "0.86998791305672",
                            "1682157614": "1.0118986388682"
                        },
                        "iron": {
                            "1682149754": "0.64308093312704"
                        }
                    },
                    "items_count": {
                        "wood": 3,
                        "stone": 2,
                        "iron": 1
                    },
                    "timestamps": {
                        "wood": [
                            1682149754,
                            1682154041,
                            1682162752
                        ],
                        "stone": [
                            1682149754,
                            1682157614
                        ],
                        "iron": [
                            1682149754
                        ]
                    }
                },
                "amounts": {
                    "schedules": {
                        "wood": {
                            "1682149744": "6219.8810136113",
                            "1682154041": "10568.009464828",
                            "1682162752": "20820.486809664"
                        },
                        "stone": {
                            "1682149744": "1479.3001208694",
                            "1682157614": "8326.1049966258"
                        },
                        "iron": {
                            "1682149744": "10844.569190669"
                        }
                    },
                    "items_count": {
                        "wood": 3,
                        "stone": 2,
                        "iron": 1
                    },
                    "timestamps": {
                        "wood": [
                            1682149744,
                            1682154041,
                            1682162752
                        ],
                        "stone": [
                            1682149744,
                            1682157614
                        ],
                        "iron": [
                            1682149744
                        ]
                    },
                    "values": {
                        "wood": [
                            "6219.8810136113",
                            "10568.009464828",
                            "20820.486809664"
                        ],
                        "stone": [
                            "1479.3001208694",
                            "8326.1049966258"
                        ],
                        "iron": [
                            "10844.569190669"
                        ]
                    },
                    "next_timestamps": {
                        "wood": {
                            "1682149744": 1682154041,
                            "1682154041": 1682162752
                        },
                        "stone": {
                            "1682149744": 1682157614
                        },
                        "iron": []
                    },
                    "schedules_flipped": {
                        "wood": {
                            "6219.8810136113": 1682149744,
                            "10568.009464828": 1682154041,
                            "20820.486809664": 1682162752
                        },
                        "stone": {
                            "1479.3001208694": 1682149744,
                            "8326.1049966258": 1682157614
                        },
                        "iron": {
                            "10844.569190669": 1682149744
                        }
                    }
                }
            },
            "Synchronizer": {
                "handlers": {}
            },
            "link_change_order": ""
        }
    }

    function populationIsLow() {
        const c = getCurrentRessources();

        return 100 - 100 * c.population / c.maxPopulation < minFreePopulationPercentage;
    }

    function getLowestRessourceLevel(currentBuildLevel) {

        let min = currentBuildLevel[ids.wood].currentLevel

        if (min > currentBuildLevel[ids.stone].currentLevel)
            min = currentBuildLevel[ids.stone].currentLevel;

        if (min > currentBuildLevel[ids.iron].currentLevel)
            min = currentBuildLevel[ids.iron].currentLevel

        return min;


    }

    function isMaxLevel(buildId, currentBuildLevel) {

        switch (buildId) {
            case ids.barracks: return currentBuildLevel[ids.barracks].currentLevel >= 25;
            case ids.farm: return currentBuildLevel[ids.farm].currentLevel >= 30;
            case ids.garage: return currentBuildLevel[ids.garage].currentLevel >= 15;
            case ids.hide: return currentBuildLevel[ids.hide].currentLevel >= 10;
            case ids.iron: return currentBuildLevel[ids.iron].currentLevel >= 30;
            case ids.main: return currentBuildLevel[ids.main].currentLevel >= 30;
            case ids.market: return currentBuildLevel[ids.market].currentLevel >= 25;
            case ids.place: return currentBuildLevel[ids.place].currentLevel >= 1;
            case ids.smith: return currentBuildLevel[ids.smith].currentLevel >= 20;
            case ids.snob: return currentBuildLevel[ids.snob].currentLevel >= 1;
            case ids.stable: return currentBuildLevel[ids.stable].currentLevel >= 20;
            case ids.statue: return currentBuildLevel[ids.statue].currentLevel >= 1;
            case ids.stone: return currentBuildLevel[ids.stone].currentLevel >= 30;
            case ids.storage: return currentBuildLevel[ids.storage].currentLevel >= 30;
            case ids.wall: return currentBuildLevel[ids.wall].currentLevel >= 20;
            case ids.wood: return currentBuildLevel[ids.wood].currentLevel >= 30;


            default:
                throw new Error("Invalid buildID");
        }
    }

    function buildRequirementSatisfied(buildId, currentBuildLevel) {
        switch (buildId) {
            case ids.farm:
            case ids.hide:
            case ids.iron:
            case ids.main:
            case ids.place:
            case ids.statue:
            case ids.stone:
            case ids.wood:
            case ids.storage:
            case ids.wall: return true;
            case ids.barracks: return currentBuildLevel[ids.main].currentLevel >= 3;
            case ids.garage: return currentBuildLevel[ids.main].currentLevel >= 10 && currentBuildLevel[ids.smith].currentLevel >= 10;
            case ids.market: return currentBuildLevel[ids.main].currentLevel >= 3 && currentBuildLevel[ids.storage].currentLevel >= 2;
            case ids.smith: return currentBuildLevel[ids.main].currentLevel >= 5 && currentBuildLevel[ids.storage].currentLevel >= 1;
            case ids.snob: return currentBuildLevel[ids.main].currentLevel >= 20 && currentBuildLevel[ids.smith].currentLevel >= 20 && currentBuildLevel[ids.market].currentLevel >= 10;
            case ids.stable: return currentBuildLevel[ids.main].currentLevel >= 10 && currentBuildLevel[ids.barracks].currentLevel >= 5 && currentBuildLevel[ids.smith].currentLevel >= 5;


            default:
                throw new Error("Invalid buildID");
        }
    }


    function calculateMostNeededRessource() {
        const c = getCurrentRessources();

        //wood low?
        if (c.wood <= c.iron && c.wood <= c.stone)
            return ids.wood;

        //stone low?
        if (c.stone <= c.iron && c.stone <= c.wood)
            return ids.stone;


        return ids.iron;
    }

    function getAvaerageRessourceLevel(currentBuildLevel) {
        return Math.floor((currentBuildLevel.wood.currentLevel + currentBuildLevel.stone.currentLevel + currentBuildLevel.iron.currentLevel) / 3)
    }

    function ressourcesMaxed(currentBuildLevel) {
        return currentBuildLevel.wood.currentLevel == 30 && currentBuildLevel.stone.currentLevel == 30 && currentBuildLevel.iron.currentLevel == 30
    }

    function isCurrentlyBuilding(buildId, currentBuildLevel) {

        /*
        "level": "13",
        "level_next": 14,
        */
        return currentBuildLevel[buildId].level_next - currentBuildLevel[buildId].level >= 3;

    }


    function maxOutRemeaining(currentBuildLevel) {
        /*
            [
                [
                    "main",
                    {
                        "currentLevel": 20,
                        "wood": 9155,
                        "stone": 10311,
                        "iron": 7120,
                        "population": 17
                    }
                ],
                [
                    "barracks",
                    {
                        "currentLevel": 25,
                        "wood": 0,
                        "stone": 0,
                        "iron": 0,
                        "population": 0
                    }
                ]
            ]
        */
        const shuffledBuildLevel = Object.entries(currentBuildLevel).sort((a, b) => 0.5 - Math.random());

        console.log(shuffledBuildLevel);
        

        for(const building of shuffledBuildLevel) {
            let buildId = building[0];

            if(!isMaxLevel(buildId, currentBuildLevel))
                return build;
        }

        return null;
    }

    function canBeBuild(buildId, currentBuildLevel) {
        return !!currentBuildLevel[buildId].currentLevel;
    }

    function floor(number) {
        return Math.floor(number);

    }

    function getNextBuild(currentBuildLevel) {


        //farm
        if (populationIsLow() && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && !isMaxLevel(ids.farm, currentBuildLevel))
            return ids.farm;

        //storage
        if (storageIsLow() && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && !isMaxLevel(ids.storage, currentBuildLevel))
            return ids.storage;

        //snob
        if (getLowestRessourceLevel(currentBuildLevel) > 25 && buildRequirementSatisfied(ids.snob, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && !isMaxLevel(ids.snob, currentBuildLevel))
            return ids.snob

        //wall
        if (priorityWall || (getLowestRessourceLevel(currentBuildLevel) > 20 && getBuildDistance(ids.iron, ids.wall) >= 5 && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && !isMaxLevel(ids.wall, currentBuildLevel)))
            return ids.wall;


        //statue
        if (getLowestRessourceLevel(currentBuildLevel) >= 10 && !isMaxLevel(ids.statue, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && canBeBuild(ids.statue, currentBuildLevel))
            return ids.statue;

        //barracks
        if (getLowestRessourceLevel(currentBuildLevel) >= 15 && (floor(getLowestRessourceLevel(currentBuildLevel) / 3) > currentBuildLevel.barracks.currentLevel) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.barracks.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && !isMaxLevel(ids.barracks, currentBuildLevel) && buildRequirementSatisfied(ids.barracks, currentBuildLevel))
            return ids.barracks;

        //stable
        if (getLowestRessourceLevel(currentBuildLevel) >= 15 && (floor(getLowestRessourceLevel(currentBuildLevel) / 3) > currentBuildLevel.stable.currentLevel) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.stable.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isMaxLevel(ids.stable, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && buildRequirementSatisfied(ids.stable, currentBuildLevel))
            return ids.stable;

        //smith
        if (getLowestRessourceLevel(currentBuildLevel) >= 15 && ((getLowestRessourceLevel(currentBuildLevel) > 23 && getBuildDistance(ids.iron, ids.smith) >= 5) || currentBuildLevel.smith.currentLevel < 5) && !isMaxLevel(ids.smith, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && buildRequirementSatisfied(ids.smith, currentBuildLevel))
            return ids.smith;

        //garage
        if (getLowestRessourceLevel(currentBuildLevel) >= 15 && floor(getLowestRessourceLevel(currentBuildLevel) / 5) > currentBuildLevel.garage.currentLevel && !isMaxLevel(ids.garage, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && buildRequirementSatisfied(ids.garage, currentBuildLevel))
            return ids.garage;

        //market
        if (getBuildDistance(ids.iron, ids.market) > 15 && buildRequirementSatisfied(ids.market, currentBuildLevel) && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && currentBuildLevel.market.currentLevel < maxMarketBuildLevel)
            return ids.market


        //main
        if (getLowestRessourceLevel(currentBuildLevel) >= 15 && getAvaerageRessourceLevel(currentBuildLevel) - currentBuildLevel.main.currentLevel >= 5 && !isCurrentlyBuilding(ids.farm, currentBuildLevel) && currentBuildLevel.main.currentLevel < maxMainBuildLevel)
            return ids.main




        const mostNeededRessource = calculateMostNeededRessource();
        if (getLowestRessourceLevel(currentBuildLevel) >= 2 && !isMaxLevel(mostNeededRessource, currentBuildLevel))
            return mostNeededRessource;

        //stone
        if (getBuildDistance(ids.stone, ids.wood) < 1 && !isMaxLevel(ids.stone, currentBuildLevel))
            return ids.stone;

        //wood
        if (getBuildDistance(ids.wood, ids.iron) < 1 && !isMaxLevel(ids.wood, currentBuildLevel))
            return ids.wood;

        //iron
        if (!isMaxLevel(ids.iron, currentBuildLevel))
            return ids.iron;


        return maxOutRemeaining(currentBuildLevel);


    }

    function getDiff(a, b) {
        return a - b
    }

    function getBuildDistance(idA, idB) {
        const currentBuildLevel = getCurrentBuildLevel()

        return currentBuildLevel[idA].currentLevel - currentBuildLevel[idB].currentLevel;
    }


    function getCurrentRessources() {
        const wood = + document.getElementById('wood').innerText;
        const stone = + document.getElementById('stone').innerText;
        const iron = + document.getElementById('iron').innerText;
        const storage = + document.getElementById('storage').innerText;
        const population = + document.getElementById('pop_current_label').innerText;
        const maxPopulation = + document.getElementById('pop_max_label').innerText;

        return { wood, stone, iron, storage, population, maxPopulation };

    }

    /*
    function getCurrentRessources() {
        const wood = + game_data.village.wood;
        const stone = + game_data.village.stone;
        const iron = + game_data.village.iron;
        const storage = + game_data.village.storage_max;
        const population = + game_data.village.pop;
        const maxPopulation = + game_data.village.pop_max;
    
        return {wood, stone, iron, storage, population, maxPopulation};
    
    }
    */

    function NaNToZero(value) {
        return value ? value : 0;
    }

    function getCost(buildId) {
        const buildRow = document.getElementById(`main_buildrow_${buildId}`)

        if (buildRow == null) {
            return {}
        }

        const match = buildRow.children[0].children[3].innerText?.match(/\d+/g)
        const currentLevel = + (match ? match[0] : 0);


        const wood = NaNToZero(+ buildRow.querySelector('.cost_wood')?.innerText);
        const stone = NaNToZero(+ buildRow.querySelector('.cost_stone')?.innerText);
        const iron = NaNToZero(+ buildRow.querySelector('.cost_iron')?.innerText);

        const population = NaNToZero(+ buildRow.children[5]?.innerText);



        return { currentLevel, wood, stone, iron, population }
    }



    function canAfford(buildId) {
        const currentRessources = getCurrentRessources();
        const cost = getCost(buildId)
        return currentRessources.wood >= cost.wood && currentRessources.iron >= cost.iron && currentRessources.stone >= cost.stone;
    }


    function getCurrentBuildLevel() {

        let buildLevel = {}

        for (let id in ids) {
            const cost = getCost(ids[id]);
            buildLevel[id] = cost;
        }

        return buildLevel;
    }

    function getCurrentBuildLevelIncludingQueue() {
        const buildingMain = getBuildingMain();
        const buildings = buildingMain.buildings

        let buildLevel = {}

        for (const [buildId, building] of Object.entries(buildings)) {
            buildLevel[buildId] = building;
            buildLevel[buildId].population = building.pop;
            buildLevel[buildId].currentLevel = building.level_next - 1;
        }

        for (let id in ids) {
            const cost = getCost(ids[id]);
            if (!buildLevel[id]) {
                buildLevel[id] = cost;
            }
        }

        return buildLevel;
    }


    function checkInProgress(buildId) {

    }

    function getAllBuildsInProgress() {
        const buildqueue = document.getElementById("buildqueue");

        if (!buildqueue)
            return []

        const children = buildqueue.children

        for (let i = 1; i < children.length - 1; i++) {
            console.log(children[i].innerText);
        }
    }

    function getCurrentBuildQueueLength() {
        const buildqueue = document.getElementById("buildqueue");

        return buildqueue ? buildqueue.childElementCount - 2 : 0;
    }

    function getBuildQueueLimit() {
        const gameData = getGameData();
        return gameData.features.Premium.active ? 4 : 2;
    }

    function getBuildButton(buildId, nextbuildLevel) {
        const selectorString = `main_buildlink_${buildId}_${nextbuildLevel}`;
        const buildButton = document.getElementById(selectorString)

        return buildButton;
    }

    function navigateScreen(screenId) {
        const gameData = getGameData();
        const linkBase = gameData.link_base_pure;
        const destination = `${linkBase}${screenId}`;

        window.location.href = destination
    }

    function build(buildId, nextbuildLevel) {
        const buildButton = getBuildButton(buildId, nextbuildLevel);
        buildButton?.click();
    }

    function nextVillage() {
        let arrowRight = document.getElementById('village_switch_right');

        if (!arrowRight)
            return;

        arrowRight.click();
    }

    function previousVillage() {
        let arrowLeft = document.getElementById('village_switch_left');

        if (!arrowLeft)
            return;

        arrowLeft.click();
    }

    function timeForNextRefresh() {
        const { nextRefresh } = window.OMNIControl;
        return nextRefresh == null || nextRefresh.getTime() < (new Date()).getTime()
    }

    function udpateOmniControl() {
        let storedConfig = loadStorage();

        if (!storedConfig) {
            saveStorage(OMNIControl);
        } else {
            window.OMNIControl = storedConfig;
        }
    }

    function saveOmniControl() {
        saveStorage(window.OMNIControl);
    }


 
    async function buildLoop() {

        const currentBuildLevel = getCurrentBuildLevelIncludingQueue();
        const toBuild = getNextBuild(currentBuildLevel);


        await avoidBotProtection();

        if (window.OMNIControl.traverseVillages && timeForNextRefresh()) {

            nextVillage();

        } else if (timeForNextRefresh()) {

            navigateScreen(screenIds.main)
        }

        if (toBuild == null) {
            console.log("finished building!!")
            clearInterval(interval);
            return;
        }

        let nextbuildLevel = + currentBuildLevel[toBuild].currentLevel + 1
        console.log(`Can we build ${toBuild} Level ${nextbuildLevel}`);

        if (getCurrentBuildQueueLength() >= getBuildQueueLimit()) {
            console.log("BuildQueue is currently full!")
            return;
        }

        console.log("cost of next build step: ", getCost(toBuild));
        console.log(canAfford(toBuild));

        // check if we dont have engough ressources
        if (!canAfford(toBuild))
            return;

        build(toBuild, nextbuildLevel);

    }


    udpateOmniControl();
    window.OMNIControl.nextRefresh = getNextPageRefresh();
    let interval = setInterval(() => buildLoop(), 1000)

})();