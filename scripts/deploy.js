const marketplacehardhat = require("hardhat");
async function main() {
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("Deployed to address", nftMarket.address)
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
