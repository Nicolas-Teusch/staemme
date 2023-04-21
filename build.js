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



const minFreeStoragePercentage = 10;
const minFreePopulationPercentage = 10;
const maxMainBuildLevel = 20;
const maxMarketBuildLevel = 20;
let priorityWall = false;

function storageIsLow() {
    const c = getCurrentRessources();

    return 100 - 100 * c.wood / c.storage < minFreeStoragePercentage || 100 - 100 * c.stone / c.storage < minFreeStoragePercentage || 100 - 100 * c.iron / c.storage < minFreeStoragePercentage
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
    if(getLowestRessourceLevel(currentBuildLevel) >= 10 && !isMaxLevel(ids.statue, currentBuildLevel))
        return ids.statue;

    //barracks
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && (getLowestRessourceLevel(currentBuildLevel) / 3 > currentBuildLevel.barracks.currentLevel) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.barracks.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isMaxLevel(ids.barracks, currentBuildLevel) && buildRequirementSatisfied(ids.barracks, currentBuildLevel))
        return ids.barracks;
  
    //stable
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && (getLowestRessourceLevel(currentBuildLevel) / 3  > currentBuildLevel.stable.currentLevel ) || (getLowestRessourceLevel(currentBuildLevel) > 25 && getLowestRessourceLevel(currentBuildLevel) / 2 > currentBuildLevel.stable.currentLevel) || ressourcesMaxed(currentBuildLevel) && !isMaxLevel(ids.stable, currentBuildLevel) && buildRequirementSatisfied(ids.stable, currentBuildLevel))
        return ids.stable;

    //smith
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && ((getLowestRessourceLevel(currentBuildLevel) > 23 && getBuildDistance(ids.iron, ids.smith) >= 5) || currentBuildLevel.smith.currentLevel < 5) && !isMaxLevel(ids.smith, currentBuildLevel) && buildRequirementSatisfied(ids.smith, currentBuildLevel))
        return ids.smith;
    
    //garage
    if(getLowestRessourceLevel(currentBuildLevel) >= 15 && getLowestRessourceLevel(currentBuildLevel) / 5 > currentBuildLevel.garage.currentLevel && !isMaxLevel(ids.garage, currentBuildLevel) && buildRequirementSatisfied(ids.garage, currentBuildLevel))
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
    if(!isMaxLevel(mostNeededRessource, currentBuildLevel))
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


    return null;

    
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

/*
function getCurrentBuildLevel() {

   return game_data.village.buildings;
}
*/


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
    
    return 2;
}

function getBuildButton(buildId, nextbuildLevel) {
    const selectorString = `main_buildlink_${buildId}_${nextbuildLevel}`;
    const buildButton = document.getElementById(selectorString)

    return buildButton;
}


function build(buildId, nextbuildLevel) {
    const buildButton = getBuildButton(buildId, nextbuildLevel);
    console.log("the build button: ", buildButton);
    buildButton?.click();
}

function buildLoop() {
    
    const currentBuildLevel = getCurrentBuildLevel();
    const toBuild = getNextBuild(currentBuildLevel)

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
