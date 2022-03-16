// https://eth-ropsten.alchemyapi.io/v2/A1uJGtjITHnAFPc7YJSprhPMlJp1DmUF

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/A1uJGtjITHnAFPc7YJSprhPMlJp1DmUF",
      accounts: [
        "447ec402b7935906e9010046c966edbd2331232819418cba540e149d134fa040",
      ],
    },
  },
};
