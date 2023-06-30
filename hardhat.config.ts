import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const Goerli_URL = process.env.Goerli_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    goerli: {
      url: Goerli_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;