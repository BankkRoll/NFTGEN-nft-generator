# NFTGEN - NFT Image and GIF Generator

## Overview
NFTGEN is an open-source tool for generating unique NFT images or GIFs, complete with metadata. You can easily customize and configure NFTGEN to suit your needs and generate your own NFTs in just a few simple steps.

## Installation
1. Download [Node.js](https://nodejs.org)
2. Clone the NFTGEN repository from GitHub: `git clone https://github.com/BankkRoll/NFTGEN-nft-gif-generator.git`
3. Or download here -> https://github.com/BankkRoll/NFTGEN-nft-gif-generator/archive/refs/heads/main.zip
4. Install the project dependencies: `npm install`

## Configuration
1. Update the configuration settings in the `config.js` file to customize the output of your NFTs.
2. Here's a brief overview of the configuration settings:
   * `traitsFolder`: The name of the folder containing the image assets.
   * `traitFolders`: An array of the subfolders within `traitsFolder` containing the individual image assets.
   * `outputFolder`: The name of the folder where the generated NFTs will be saved.
   * `layersNumber`: The number of image layers to combine in each NFT.
   * `numImages`: The number of NFTs to generate.
   * `startAt`: The index number to start generating NFTs at. ex. ( 0 or 1 )
   * `collectionName`: The name of your NFT collection.
   * `collectionDescription`: The description for your NFT collection.
   * `collectionExternal_url`: The external URL for your NFT collection.

## Usage
1. Generate your NFTs by running the command `npm start` in your terminal or command prompt.
2. This will generate the specified number of NFTs and save them to the output folder you specified in the configuration settings.

## Support
If you encounter any issues while using NFTGEN, please feel free to submit an issue on the GitHub repository. We'll do our best to help you resolve the issue as quickly as possible.

## Contributing
We welcome contributions to the NFTGEN project! If you'd like to contribute, please fork the repository and submit a pull request with your changes. We'll review your changes and merge them if they meet our project standards.

## License
NFTGEN is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/apache/.github/blob/main/LICENSE) for the full text.

## Tip Jar
If you found NFTGEN useful, consider buying me a Red Bull to fuel future development at the following Ethereum wallet address: `0x52b626802B3fc229badd50EA0d7e05278421C16f`