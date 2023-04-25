const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("canvas");
const GIFEncoder = require("gifencoder");
const inquirer = require('inquirer');
const config = require("./config.js");
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const { execSync } = require('child_process');

const printHeader = require('./workers/bankkroll');
const printCollectionInfo = require("./workers/collectionInfoPrinter");
const { logSuccess, logError } = require("./workers/consoleLogger");
const { readDir } = require("./workers/utils");
const animateConsoleLog = require('./workers/animateLogs');
const extractFrames = require('./workers/extractFrames');



// Create a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Returns a random trait from each fodler
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Calculate the total combinations possible
function calculateTotalCombinations(config) {
  return config.traitFolders.reduce((acc, folder) => {
    const traitPath = path.join(config.traitsFolder, folder);
    const traitChoices = fs.readdirSync(traitPath);
    return acc * traitChoices.length;
  }, 1);
}



//#########################################//
//#                                       #//
//#           Main Function               #//
//#                                       #//
//#########################################//

async function main() {
  try {
    // Create the output folder if it does not already exist
    fs.mkdirSync(config.outputFolder, { recursive: true });

    // Print the header and collection info to the console
    printHeader();
    await delay(1500);

    // Prompt the user to choose between generating GIFs or images
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Do you want to generate GIFs or Images?',
      choices: ['GIFs', 'Images']
    });
    const choice = answer.choice.charAt(0);
    const fileType = choice.toUpperCase() === 'G' ? 'GIFs' : 'Images';

    // Calculate the total number of possible combinations of traits
    const totalCombinations = calculateTotalCombinations(config);

    // Check that the requested number of files does not exceed the total possible combinations
    if (config.numImages > totalCombinations) {
      logError(`Requested number of files (${config.numImages}) exceeds the total possible combinations (${totalCombinations}). Please lower the number of files to generate.`);
      return;
    }
    printCollectionInfo(config);
    animateConsoleLog(`\n\x1b[1m\x1b[36m Generating ${fileType}.......\x1b[0m\n`, 50);
    await delay(2500);

    for (let i = 0; i < config.numImages; i++) {
      if (choice.toUpperCase() === 'G') {
        await generateGif(i, config);
      } else {
        await generateImage(i, config);
      }
      logSuccess(`Generated ${fileType} #${i + config.startAt}`);
    }

    animateConsoleLog(`\n\x1b[1m\x1b[32m All ${fileType} generated successfully! Details below.... \x1b[0m\n`, 40);
    await delay(5000);

    printCollectionInfo(config);
    await delay(2000);

    // Prompt the user to choose whether to upload to IPFS or not
    const ipfsAnswer = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Do you want to upload the generated files to IPFS?',
      choices: ['Yes', 'No'],
    });

    if (ipfsAnswer.choice === 'Yes') {
      const folderPath = config.outputFolder;
      const cmd = `npx thirdweb@latest upload ${folderPath}`;
      execSync(cmd, { stdio: 'inherit' });
    } else {
      console.log('Skipping IPFS upload.');
    }


    await delay(2000);
    printHeader();

  } catch (err) {
      logError(`Failed to generate files: ${err.message}`);
    }
}






//#########################################//
//#                                       #//
//#           Generate Image              #//
//#                                       #//
//#########################################//

// Generates a single Image
async function generateImage(i, config, storageChoice) {
  try {
    const traits = [];
    const canvases = [];

    // Loop over all trait folders and choose a random trait for each
    for (const traitFolder of config.traitFolders) {
      const traitPath = path.join(config.traitsFolder, traitFolder);
      const traitChoices = await readDir(traitPath);
      const chosenTrait = randomChoice(traitChoices);
      const chosenTraitPath = path.join(traitPath, chosenTrait);

      // Load the image
      const img = await loadImage(chosenTraitPath);

      // Add the trait to the traits array
      traits.push({
        trait_type: traitFolder,
        value: path.basename(chosenTrait, path.extname(chosenTrait)),
      });

      // Add the image to the canvases array
      canvases.push(img);
    }

    // Combine images from each trait into a single image
    const canvas = createCanvas(config.imageWidth, config.imageHeight, 'sRGB');
    const ctx = canvas.getContext("2d");

    for (let j = 0; j < config.layersNumber; j++) {
      const image = canvases[j];
      ctx.drawImage(image, 0, 0, config.imageWidth, config.imageHeight);
    }

    // Save the combined image
    const outputPath = path.join(config.outputFolder, `${i + config.startAt}.png`);
    const outputBuffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, outputBuffer);

    // Create metadata for this generated image and write it to a JSON file
    const metadata = {
      name: `${config.collectionName} #${i + config.startAt}`,
      description: `${config.collectionDescription}`,
      image: `${i + config.startAt}.png`,
      external_url: `${config.collectionExternal_url}`,
      attributes: traits,
    };

    const outputJsonPath = path.join(config.outputFolder, `${i + config.startAt}.json`);
    fs.writeFileSync(outputJsonPath, JSON.stringify(metadata, null, 2));

    console.log(`- JSON metadata: \x1b[2m${outputJsonPath}\x1b[0m`);
    console.log(`- Image file: \x1b[2m${outputPath}\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m❌ Failed to generate image ${i + config.startAt}: \x1b[0m${err.message}`);
  }
}




//#########################################//
//#                                       #//
//#             Generate Gif              #//
//#                                       #//
//#########################################//

// Generates a single Gif
async function generateGif(i, config, storageChoice) {
  try {
    const traits = [];
    const traitFrames = [];

    // Loop over all trait folders and choose a random trait for each
    for (const traitFolder of config.traitFolders) {
      const traitPath = path.join(config.traitsFolder, traitFolder);
      const traitChoices = await readDir(traitPath);
      const chosenTrait = randomChoice(traitChoices);
      const chosenTraitPath = path.join(traitPath, chosenTrait);

      // Extract frames from the chosen trait
      const frames = await extractFrames(chosenTraitPath);

      // Add the trait to the traits array
      traits.push({
        trait_type: traitFolder,
        value: path.basename(chosenTrait, path.extname(chosenTrait)),
      });

      // Add the frames to the traitFrames array
      traitFrames.push(frames);
    }

    // Combine frames from each trait into a single image
    const frames = [];
    for (let frameIndex = 0; frameIndex < 4; frameIndex++) {
      const canvas = createCanvas(config.imageWidth, config.imageHeight, 'sRGB');
      const ctx = canvas.getContext("2d");

      for (let j = 0; j < config.layersNumber; j++) {
        const frame = traitFrames[j][frameIndex];
        ctx.drawImage(frame, 0, 0, config.imageWidth, config.imageHeight);
      }

      frames.push(canvas);
    }

    // Encode the frames into a GIF
    const encoder = new GIFEncoder(config.imageWidth, config.imageHeight);
    const outputGifPath = path.join(config.outputFolder, `${i + config.startAt}.gif`);

    // Create a write stream to write the GIF file to disk
    const outputStream = fs.createWriteStream(outputGifPath);
    encoder.createReadStream().pipe(outputStream);

    encoder.setRepeat(0);
    encoder.setDelay(100);
    encoder.setQuality(40);
    encoder.start();

    // Add each frame to the GIF encoder
    for (const frame of frames) {
      encoder.addFrame(frame.getContext("2d"));
    }

    encoder.finish();

    // Create metadata for this generated image and write it to a JSON file
    const metadata = {
      name: `${config.collectionName} #${i + config.startAt}`,
      description: `${config.collectionDescription}`,
      image: `${i + config.startAt}.gif`,
      external_url: `${config.collectionExternal_url}`,
      attributes: traits,
    };

    const outputJsonPath = path.join(config.outputFolder, `${i + config.startAt}.json`);
    fs.writeFileSync(outputJsonPath, JSON.stringify(metadata, null, 2));

    console.log(`- JSON metadata: \x1b[2m${outputJsonPath}\x1b[0m`);
    console.log(`- GIF file: \x1b[2m${outputGifPath}\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m❌ Failed to generate GIF ${i + config.startAt}: \x1b[0m${err.message}`);
  }
}

main();
