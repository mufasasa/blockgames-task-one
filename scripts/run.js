const main = async () => {
    const [owner, randomUser] = await hre.ethers.getSigners();
    const simple = await hre.ethers.getContractFactory("Simple");
    const simpleContract = await simple.deploy('delta');
    await simpleContract.deployed();
    console.log("Contract deployed to:", simpleContract.address);
    let greetTxn = await simpleContract.greet();
    console.log("Greeting:", greetTxn);

    let discordHandle = await simpleContract.getDiscordHandle();
    console.log("Discord handle:", discordHandle);

  };

const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };

runMain();