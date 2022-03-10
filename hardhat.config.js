require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/VcifBtHeOCJDTumMYRZ3vW9spE6dBcRl",
      accounts: ["f4cc5a6f8d91f876379a40efcd83ee778aa8be7e80dadcb2fa9b87c156fabc84"]
    },
  },
};