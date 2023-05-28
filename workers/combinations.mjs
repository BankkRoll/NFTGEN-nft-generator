import { promises as fs } from 'fs';
import { join } from 'path';
import { readDir } from './utils.mjs';

const generatedCombinations = new Set();

// Returns a random trait from each folder
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
      const traitPath = join(config.traitsFolder, traitFolder);
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
async function calculateTotalCombinations(config) {
  return config.traitFolders.reduce(async (acc, folder) => {
    const traitPath = join(config.traitsFolder, folder);
    const traitChoices = await fs.readdir(traitPath);
    return acc * traitChoices.length;
  }, 1);
}

export { generateUniqueTraits, calculateTotalCombinations };
