const hre = require("hardhat");
require('dotenv').config();

const tokenContractJSON = require("../artifacts/contracts/Ritika.sol/Ritika.json");

const tokenAddress = "0xFA52C5FC1717C639DB72b58a3e6C007376d191A7"; // contract address
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x7c76e4bc59a18fff2391d2bf32bc3a2fe833b910"; // your wallet address

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  // Get the contract instance of the deployed NFT contract
  const nft = await hre.ethers.getContractAt(tokenABI, tokenAddress, deployer);

  // Array of token URIs for the NFTs to be minted
  const tokenURIs = [
    "ipfs://QmbSLP47baRRwDm9MKkH1SQbEXVCunPBnvc6813j4yoqqQ",
    "ipfs://QmdmWaSFPRGYM3dAp7yqcN7C7hVHFTWxJKjw5JxJXKEM59",
    "ipfs://QmbjGWYSNEfK3ChyaLWtP8CVH1MLnjHEdyk3wWWhtCVBD8",
    "ipfs://Qmaw1shKyuxBYswr9nwcm9vVoduCKhbNYX5kPDC84F1GtC",
    "ipfs://QmYjKmbnMhNeUH9uiScotvry3b4dnbWGu2UadKC3Cy46Rj"
  ];

  // Array of prompts corresponding to each NFT
  const prompts = [
    "Dogs",
    "Dogs",
    "Dogs",
    "Dogs",
    "Dogs"
  ];

  // Call the contract's batch mint function with the token URIs and prompts
  await nft.mintMultipleNFTs(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
