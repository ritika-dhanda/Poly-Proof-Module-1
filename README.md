# Poly-Proof-NFT-Bridge (Bridge between Sepolia to Amoy testnet)

This repository contains the implementation of a bridging of NFT collection on the Ethereum sepolia to amoy, map the collection to Polygon, and transfer assets over via the Polygon Bridge. To put a twist on the project, we have used an image generation tool - like DALLE 2 or Midjourney - to create the images for your NFTs.

## Description

This project involves creating and deploying an NFT collection on the Ethereum Sepolia testnet, mapping it to the Polygon Amoy testnet, and transferring the assets using the Polygon Bridge. The NFTs will be generated using DALLE 2 or Midjourney, stored on IPFS, and then minted and transferred using smart contracts and Hardhat scripts.


## Prerequisites

- [MetaMask](https://metamask.io/) installed in your browser
- [fxPortal Starter](https://github.com/Metacrafters/fxPortalStarter) for compiling and deploying the contract
- [Pinata Cloud](https://www.pinata.cloud/) To generate IPFS of generated image.
- Image generation tool DALL-E or Midjourney or Leonardo AI or Lexica Art.
- VS Code Integrated development Environment 

## Getting Started

### Executing program

1. To build and run this project, we can use VS Code or GitPod.
2. Create a new file by clicking on the "+" icon in the left-hand sidebar.
3. Clone this repository.
4. Write and Deploy an ERC721 or ERC1155. 

## Installing
* Fork this repository and the clone it to there local system. 
* You are required to install Node.js prior before executing the program.
* Install all dependancies by using:
```shell
npm install or npm i
```
* Setup your .env file with RPC URL's and your wallet Private Key.

### Executing program

1. Compile the contract:
```shell
npx hardhat compile
```

2. Now deploy the contract on sepolia network using the following command:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```

3. Now mint all the NFT's on sepolia network using the following command:
```shell
npx hardhat run scripts/mintNFT.js --network sepolia
```
4. Again we now need to deposit the NFT's for the Bridge from Sepolia to Amoy using this command:
```shell
npx hardhat run scripts/approveDeposit.js --network sepolia
```
5. Wait for 20-30 mins to check actual bridged process, after that copy the contract address on the amoy network after it recieves all the NFTs.

6. After getting bridged address deploy getBalance.js to amoy network to get the total no. of nft it recieved from that contract:
```shell
npx hardhat run scripts/getBalance.js --network amoy
```

## Connecting MetaMask with Sepolia test network

1. Open MetaMask and click on the network dropdown at the top.
2. Select "Add Network" and fill in the following details:
    - **Network Name:** Sepolia test network
    - **New RPC URL:** (https://sepolia.infura.io/v3/)
    - **ChainID:** 11155111
    - **Symbol:** SepoliaETH
3. Save and switch to the new network.

## Connecting MetaMask with Polygon Amoy Testnet

1. Open MetaMask and click on the network dropdown at the top.
2. Select "Add Network" and fill in the following details:
    - **Network Name:** Polygon Amoy Testnet
    - **New RPC URL:** (https://rpc-amoy.polygon.technology/)
    - **ChainID:** 80002
    - **Symbol:** MATIC
3. Save and switch to the new network.

## Verifying Contract on PolygonScan

1. Go to Sepolia EtherScan(https://sepolia.etherscan.io/).
2. Search for your contract address.
3. Complete the verification.

## Obtain bridged wallet address from Amoy PolygonScan

1. Go to PolygonScan(https://amoy.polygonscan.com/).
2. Search for your contract address.
3. Complete the verification.

## Authors

Ritika Dhanda

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
