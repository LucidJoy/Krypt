const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transcations = await Transactions.deploy();

  await transcations.deployed();

  console.log("Transactions deployed to:", transcations.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
