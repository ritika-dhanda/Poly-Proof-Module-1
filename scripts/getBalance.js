const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Ritika.sol/Ritika.json");

const tokenAddress = "0x16bFe7a1602D1d0C95355471a15A05DE1F21A430"; 
//got from scan
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x7C76E4bc59A18fFF2391d2bf32bC3A2fe833b910";

async function main() {
    // Get the contract instance
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Fetch the balance of the specified address
    const balance = await token.balanceOf(walletAddress);

    // Convert BigNumber to string for logging
    console.log(`You now have: ${balance.toString()} NFTs in your wallet`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
