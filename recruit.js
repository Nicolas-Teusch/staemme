
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