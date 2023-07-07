export default {
  traitsFolder: "traits",                   // folder name containing the image assets
  traitFolders: ["Head", "Eyes", "Mouth"],  // an array of subfolder names
  outputFolder: "output",                   // folder name for saving generated NFTs

  layersNumber: 3,      // number of image layers to combine
  numImages: 10000,     // total number of NFTs to generate
  startAt: 0,           // index number to start generating NFTs at ( 0 or 1 )

  imageWidth: 600,      // width of generated image
  imageHeight: 600,     // height of generated image

  // NFT Metadata for each NFT
  collectionName: "Cool NFT",                                                                                       // name of NFT collection
  collectionDescription: "I just generated my NFT GIFs using the NFTGEN by bankkroll found on github opensource!",  // description of NFT collection
  collectionExternal_url: "https://github.com/BankkRoll/NFTGEN-nft-gif-generator",                                  // external URL for NFT collection
};
