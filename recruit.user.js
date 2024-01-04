
const unitIds = {
    "spear": "spear",
    "sword": "sword",
    "axe": "axe",
    "archer": "archer",
    "spy": "spy",
    "light": "light",
    "marcher": "marcher",
    "heavy": "heavy",
    "ram": "ram",
    "catapult": "catapult",
    "snob": "snob"
}

/**
 * 
fetch("https://des1.die-staemme.de/game.php?village=1757&screen=train&mode=success&action=train_mass&page=0", {
  "referrer": "https://des1.die-staemme.de/game.php?village=1757&screen=train&mode=mass&page=0",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "units%5B1757%5D%5Bspear%5D=134&units%5B1757%5D%5Bsword%5D=18&units%5B1757%5D%5Baxe%5D=0&units%5B1757%5D%5Bspy%5D=0&units%5B1757%5D%5Blight%5D=0&units%5B1757%5D%5Bheavy%5D=7&units%5B1757%5D%5Bsnob%5D=0&h=4db00dfd",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

 */


function getMaxRecruitable(unitId) {
    return + document.getElementById(`${unitId}_0_a`);
}

function getVillageId() {
    return game_data.village.id;
}

function gotoTrain() {
    const villageId = getVillageId();

    window.location.href = `/game.php?village=${villageId}&screen=train`;
}

function inTrainWindow() {
    const villageId = getVillageId();

    return window.location === `/game.php?village=${villageId}&screen=train`
}

function recruit(unitId, amount) {


    if (!inTrainWindow()) {
        gotoTrain();
    }

    const trainform = document.getElementById('train_form');

    const spearInput = trainform.querySelector(`input[name="${unitId}"]`)
    const trainButton = trainform.querySelector('.btn-recruit')

    spearInput.value = + amount;

    trainButton.click();
}