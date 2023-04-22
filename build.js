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
let nextRefresh = null;

function storageIsLow() {
    const c = getCurrentRessources();

    return 100 - 100 * c.wood / c.storage < minFreeStoragePercentage || 100 - 100 * c.stone / c.storage < minFreeStoragePercentage || 100 - 100 * c.iron / c.storage < minFreeStoragePercentage
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function getNextPageRefresh() {
    const now = new Date();
    const randomMinutes = 10 + Math.floor(Math.random() * 6)
    return addMinutes(now, randomMinutes)
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

function populationIsLow() {
    const c = getCurrentRessources();

    return 100 - 100 * c.population / c.maxPopulation < minFreePopulationPercentage;
}

function getLowestRessourceLevel(currentBuildLevel) {
    
    let min = currentBuildLevel[ids.wood].currentLevel

    if(min > currentBuildLevel[ids.stone].currentLevel)
        min = currentBuildLevel[ids.stone].currentLevel;

    if(min > currentBuildLevel[ids.iron].currentLevel)
        min = currentBuildLevel[ids.iron].currentLevel

    return min;

    
}

function isMaxLevel(buildId, currentBuildLevel) {

    switch (buildId) {
        case ids.barracks:  return currentBuildLevel[ids.barracks].currentLevel >= 25;
        case ids.farm:      return currentBuildLevel[ids.farm].currentLevel >= 30;
        case ids.garage:    return currentBuildLevel[ids.garage].currentLevel >= 15;
        case ids.hide:      return currentBuildLevel[ids.hide].currentLevel >= 10;
        case ids.iron:      return currentBuildLevel[ids.iron].currentLevel >= 30;
        case ids.main:      return currentBuildLevel[ids.main].currentLevel >= 30;
        case ids.market:    return currentBuildLevel[ids.market].currentLevel >= 25;
        case ids.place:     return currentBuildLevel[ids.place].currentLevel >= 1;
        case ids.smith:     return currentBuildLevel[ids.smith].currentLevel >= 20;
        case ids.snob:      return currentBuildLevel[ids.snob].currentLevel >= 1;
        case ids.stable:    return currentBuildLevel[ids.stable].currentLevel >= 20;
        case ids.statue:    return currentBuildLevel[ids.statue].currentLevel >= 1;
        case ids.stone:     return currentBuildLevel[ids.stone].currentLevel >= 30;
        case ids.storage:   return currentBuildLevel[ids.storage].currentLevel >= 30;
        case ids.wall:      return currentBuildLevel[ids.wall].currentLevel >= 20;
        case ids.wood:      return currentBuildLevel[ids.wood].currentLevel >= 30;

    
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
        case ids.wall:          return true;
        case ids.barracks:      return currentBuildLevel[ids.main].currentLevel >= 3;
        case ids.garage:        return currentBuildLevel[ids.main].currentLevel >= 10 && currentBuildLevel[ids.smith].currentLevel >= 10;
        case ids.market:        return currentBuildLevel[ids.main].currentLevel >= 3 && currentBuildLevel[ids.storage].currentLevel >= 2;
        case ids.smith:         return currentBuildLevel[ids.main].currentLevel >= 5 && currentBuildLevel[ids.storage].currentLevel >= 1;
        case ids.snob:          return currentBuildLevel[ids.main].currentLevel >= 20 && currentBuildLevel[ids.smith].currentLevel >= 20 && currentBuildLevel[ids.market].currentLevel >= 10;
        case ids.stable:        return currentBuildLevel[ids.main].currentLevel >= 10 && currentBuildLevel[ids.barracks].currentLevel >= 5 && currentBuildLevel[ids.smith].currentLevel >= 5;

    
        default:
            throw new Error("Invalid buildID");
    }
}


function calculateMostNeededRessource() {
    const c = getCurrentRessources();

    //wood low?
    if(c.wood <= c.iron && c.wood <= c.stone)
        return ids.wood;
    
    //stone low?
    if(c.stone <= c.iron && c.stone <= c.wood)
        return ids.stone;
    

    return ids.iron;
}

function getAvaerageRessourceLevel(currentBuildLevel) {
    return Math.floor((currentBuildLevel.wood.currentLevel + currentBuildLevel.stone.currentLevel + currentBuildLevel.iron.currentLevel) / 3)
}

function ressourcesMaxed(currentBuildLevel) {
    return currentBuildLevel.wood.currentLevel == 30 && currentBuildLevel.stone.currentLevel == 30 && currentBuildLevel.iron.currentLevel == 30
}


function maxOutRemeaining(currentBuildLevel) {
    const shuffledBuildLevel = currentBuildLevel.sort((a, b) => 0.5 - Math.random());

    for(const buildId of shuffledBuildLevel) {
        if(!isMaxLevel(buildId))
            return buildId
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
    if(populationIsLow() && !isMaxLevel(ids.farm, currentBuildLevel))
        return ids.farm;

    //storage
    if(storageIsLow() && !isMaxLevel(ids.storage, currentBuildLevel))
        return ids.storage;

    //wall
    if(priorityWall || (getLowestRessourceLevel(currentBuildLevel) > 20 && getBuildDistance(ids.iron, ids.wall) >= 5 && !isMaxLevel(ids.wall, currentBuildLevel)))
        return ids.wall;
        

    //statue
    if(getLowestRessourceLevel(currentBuildLevel) >= 10 && !isMaxLevel(ids.statue, currentBuildLevel) && canBeBuild(ids.statue, currentBuildLevel))
        return ids.statue;

    //barracks
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && (floor(getLowestRessourceLevel(currentBuildLevel) / 3) > currentBuildLevel.barracks.currentLevel) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.barracks.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isMaxLevel(ids.barracks, currentBuildLevel) && buildRequirementSatisfied(ids.barracks, currentBuildLevel))
        return ids.barracks;
  
    //stable
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && (floor(getLowestRessourceLevel(currentBuildLevel) / 3)  > currentBuildLevel.stable.currentLevel ) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.stable.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isMaxLevel(ids.stable, currentBuildLevel) && buildRequirementSatisfied(ids.stable, currentBuildLevel))
        return ids.stable;

    //smith
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && ((getLowestRessourceLevel(currentBuildLevel) > 23 && getBuildDistance(ids.iron, ids.smith) >= 5) || currentBuildLevel.smith.currentLevel < 5) && !isMaxLevel(ids.smith, currentBuildLevel) && buildRequirementSatisfied(ids.smith, currentBuildLevel))
        return ids.smith;
    
    //garage
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && floor(getLowestRessourceLevel(currentBuildLevel) / 5) > currentBuildLevel.garage.currentLevel && !isMaxLevel(ids.garage, currentBuildLevel) && buildRequirementSatisfied(ids.garage, currentBuildLevel))
        return ids.garage;

    //market
    if(getBuildDistance(ids.iron, ids.market) > 15 && buildRequirementSatisfied(ids.market, currentBuildLevel) && currentBuildLevel.market.currentLevel < maxMarketBuildLevel)
        return ids.market

    //snob
    if(getLowestRessourceLevel(currentBuildLevel) > 25 && buildRequirementSatisfied(ids.snob, currentBuildLevel) && !isMaxLevel(ids.snob, currentBuildLevel))
        return ids.snob

    //main
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && getAvaerageRessourceLevel(currentBuildLevel) - currentBuildLevel.main.currentLevel >= 5 && currentBuildLevel.main.currentLevel < maxMainBuildLevel)
        return ids.main
    



    const mostNeededRessource = calculateMostNeededRessource();
    if(getLowestRessourceLevel(currentBuildLevel) >= 2 && !isMaxLevel(mostNeededRessource, currentBuildLevel))
        return mostNeededRessource;

    //stone
    if(getBuildDistance(ids.stone, ids.wood) < 1 && !isMaxLevel(ids.stone, currentBuildLevel))
        return ids.stone;
    
    //wood
    if(getBuildDistance(ids.wood, ids.iron) < 1 && !isMaxLevel(ids.wood, currentBuildLevel))
        return ids.wood;

    //iron
    if(!isMaxLevel(ids.iron, currentBuildLevel))
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

    return {wood, stone, iron, storage, population, maxPopulation};

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
    
    if(buildRow == null) {
        return {}
    }

    const match = buildRow.children[0].children[3].innerText?.match(/\d+/g)
    const currentLevel = + (match ? match[0] : 0);


    const wood = NaNToZero(+ buildRow.querySelector('.cost_wood')?.innerText);
    const stone = NaNToZero(+ buildRow.querySelector('.cost_stone')?.innerText);
    const iron = NaNToZero(+ buildRow.querySelector('.cost_iron')?.innerText);

    const population = NaNToZero(+ buildRow.children[5]?.innerText);


    
    return {currentLevel, wood, stone, iron, population}
}



function canAfford(buildId) {
    const currentRessources = getCurrentRessources();
    const cost = getCost(buildId)
    return currentRessources.wood >= cost.wood && currentRessources.iron >= cost.iron && currentRessources.stone >= cost.stone;
}


function getCurrentBuildLevel() {

    let buildLevel = {}

    for(let id in ids) {
        const cost = getCost(ids[id]);
        buildLevel[id] = cost;
    }

    return buildLevel;
}


function checkInProgress(buildId) {
    
}

function getAllBuildsInProgress() {
    const buildqueue = document.getElementById("buildqueue");

    if(!buildqueue)
        return []

    const children = buildqueue.children

    for(let i = 1; i < children.length - 1; i++) {
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

function buildLoop() {
    
    const currentBuildLevel = getCurrentBuildLevel();
    const toBuild = getNextBuild(currentBuildLevel);

    if(nextRefresh == null) {
        nextRefresh = getNextPageRefresh();
    }

    if(nextRefresh.getTime() < (new Date()).getTime()){

    }

    if(toBuild == null) {
        console.log("finished building!!")
        clearInterval(interval);
        return;
    }

    let nextbuildLevel = + currentBuildLevel[toBuild].currentLevel + 1
    console.log(`Can we build ${toBuild} Level ${nextbuildLevel}` );

    if(getCurrentBuildQueueLength() >= getBuildQueueLimit()) {
        console.log("BuildQueue is currently full!")
        return;
    }

    console.log("cost of next build step: ", getCost(toBuild));
    console.log(canAfford(toBuild));

    // check if we dont have engough ressources
    if(!canAfford(toBuild)) 
        return;

    build(toBuild, nextbuildLevel);
    
}

let interval = setInterval(() => buildLoop(), 1000)
