const fs = require("fs");
const path = require("path");
const { readDir } = require("./utils");

const generatedCombinations = new Set();

// Returns a random trait from each fodler
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Checks to make sure the trait is unique
async function generateUniqueTraits(traitFolders, config) {
    let uniqueCombination = false;
    let chosenTraits = [];

    while (!uniqueCombination) {
        chosenTraits = [];

    for (const traitFolder of traitFolders) {
        const traitPath = path.join(config.traitsFolder, traitFolder);
        const traitChoices = await readDir(traitPath);
        const chosenTrait = randomChoice(traitChoices);
        chosenTraits.push(chosenTrait);
    }

    const key = chosenTraits.join(";");

    if (!generatedCombinations.has(key)) {
        uniqueCombination = true;
        generatedCombinations.add(key);
    }
    }

    return chosenTraits;
}

// Calculate the total combinations possible
function calculateTotalCombinations(config) {
    return config.traitFolders.reduce((acc, folder) => {
        const traitPath = path.join(config.traitsFolder, folder);
        const traitChoices = fs.readdirSync(traitPath);
    return acc * traitChoices.length;
    }, 1);
}

module.exports = { generateUniqueTraits, calculateTotalCombinations };
