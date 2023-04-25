const fs = require("fs");
const path = require("path");

// Calculate the total combinations possible
function calculateTotalCombinations(config) {
    return config.traitFolders.reduce((acc, folder) => {
      const traitPath = path.join(config.traitsFolder, folder);
      const traitChoices = fs.readdirSync(traitPath);
      return acc * traitChoices.length;
    }, 1);
  }

  // Print the details of the collection
  function printCollectionInfo(config) {
    const totalCombinations = calculateTotalCombinations(config);

    console.log("\x1b[1m\x1b[36m+----------------------------------------------+");
    console.log("|               \x1b[1m\x1b[33mCollection Details\x1b[36m             |");
    console.log("+--------------------------+-------------------+");
    console.log(`| \x1b[0m\x1b[32mCollection Name        \x1b[1m\x1b[36m| ${config.collectionName.padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log(`| \x1b[0m\x1b[32mCollection Size        \x1b[1m\x1b[36m| ${config.numImages.toString().padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log(`| \x1b[0m\x1b[32mStarting Index         \x1b[1m\x1b[36m| ${config.startAt.toString().padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log(`| \x1b[0m\x1b[32mOutput Folder          \x1b[1m\x1b[36m| ${config.outputFolder.padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log(`| \x1b[0m\x1b[32mNumber of Layers       \x1b[1m\x1b[36m| ${config.layersNumber.toString().padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log(`| \x1b[0m\x1b[32mImage Size             \x1b[1m\x1b[36m| ${config.imageWidth.toString().padEnd(2)} x ${config.imageHeight.toString().padEnd(10)} px \x1b[1m\x1b[36m|`);
    console.log("+--------------------------+-------------------+");
    console.log(`| \x1b[0m\x1b[32mTraits Folders         \x1b[0m\x1b[32m| ${"Folder Files".padEnd(20)}\x1b[1m\x1b[36m|`);
    config.traitFolders.forEach((folder) => {
      const traitPath = path.join(config.traitsFolder, folder);
      const traitChoices = fs.readdirSync(traitPath);
      console.log(`| \x1b[0m\x1b[35m- ${folder.padEnd(21)}\x1b[1m\x1b[36m| ${`${traitChoices.length} GIFs`.padEnd(20)}\x1b[1m\x1b[36m|`);
    });
    console.log("+--------------------------+-------------------+");
    console.log(`| \x1b[0m\x1b[32mTotal Possible Comb.   \x1b[1m\x1b[36m|\x1b[0m ${totalCombinations.toString().padEnd(20)}\x1b[1m\x1b[36m|`);
    console.log("+----------------------------------------------+\x1b[0m\n");
  }

module.exports = printCollectionInfo;