// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const {API_URL,PRIVATE_KEY}=process.env;

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   // defaultNetwork:"goerli",
//   // networks:{
//   //   hardhat:{
//   //     // chainId:31337
//   //   }
//   // },
//   goerli:{
//     url:API_URL,
//     accounts:[`0x${PRIVATE_KEY}`]
//   }
//   // paths:{
//   //   artifacts:"./client/src/artifacts"
//   // }
// };


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};