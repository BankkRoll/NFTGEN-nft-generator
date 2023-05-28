# NFTGEN - NFT Image and GIF Generator

### Completely Free! Supports .GIF , .JPG, .PNG, .JPEG

## Overview
NFTGEN is an open-source tool for generating unique NFT images or GIFs, complete with metadata. You can easily customize and configure NFTGEN to suit your needs and generate your own NFTs in just a few simple steps.


https://user-images.githubusercontent.com/106103625/234408697-d7fbc1d1-fbf2-4dd7-9c9d-fa4384613886.mp4



## Installation
1. Star the project so i know to keep making things others find useful.
2. Download [Node.js](https://nodejs.org)
3. Clone the NFTGEN repository from GitHub: `git clone https://github.com/BankkRoll/NFTGEN-nft-gif-generator.git`
4. Or download here -> https://github.com/BankkRoll/NFTGEN-nft-gif-generator/archive/refs/heads/main.zip
5. Install the project dependencies: `npm install`

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
1. Please complete the [Configuration](https://github.com/BankkRoll/NFTGEN-nft-gif-generator#configuration)
2. Generate your NFTs by running the command `npm start` in your terminal or command prompt.
3. Choose whether to generate GIFs or Images when prompted.
4. This will generate the specified number of NFTs and save them to the output folder you specified in the configuration settings.
5. Choose whether to upload the files to IPFS or keep them on your local machine. If you choose "Yes," the files will be uploaded to IPFS using [thirdweb Storage](https://portal.thirdweb.com/storage). If you choose "No," the files will remain local.
6. Your NFTs have been generated and saved to the output folder you specified, and if you chose to upload them to IPFS, they are now available on the given URI.

```
┌────────────────────────────┐
│ Usage: npm run <command>   │
└────────────────────────────┘
┌──────────────────────┬───────────────────────────────┐
│ Command              │ Description                   │
├──────────────────────┼───────────────────────────────┤
│ start                │ Start the script              │
│ collection-info      │ Print collection information  │
│ help                 │ Prints this screen            │
└──────────────────────┴───────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ Usage:                                                                                   │
│ 1. Generate your NFTs by running the command "npm start" in your terminal.               │
│ 2. Choose whether to generate GIFs or Images when prompted:                              │
│    > GIFs                                                                                │
│    > Images                                                                              │
│ 3. This will generate the specified number of NFTs and save them to the output folder.   │
│ 4. Choose whether to upload the files to IPFS or keep them on your files local:          │
│    > Yes: Upload the files to IPFS using thirdweb Storage.                               │
│    > No: Keep the files on your local machine.                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```
## Support
If you encounter any issues while using NFTGEN, please feel free to submit an issue on the GitHub repository. We'll do our best to help you resolve the issue as quickly as possible.

## Contributing
We welcome contributions to the NFTGEN project! If you'd like to contribute, please fork the repository and submit a pull request with your changes. We'll review your changes and merge them if they meet our project standards.

## License
NFTGEN is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/BankkRoll/NFTGEN-nft-gif-generator/blob/main/LICENSE) for the full text.

## Tip Jar
If you found NFTGEN useful, consider buying me a Red Bull to fuel future development at the following Ethereum wallet address: `0xB26b2f9786090A9f647a90979b48C4Be564D7ff9`