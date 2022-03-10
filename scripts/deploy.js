const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const acountBalance = await deployer.getBalance();

    console.log('Deploying contract with account: ', deployer.address);
    console.log('Deployer balance: ', acountBalance.toString());

    const simpleContractFactory = await hre.ethers.getContractFactory("Simple");
    const simpleContract = await simpleContractFactory.deploy('Delta2755');
    await simpleContract.deployed();
    console.log('Contract deployed to: ', simpleContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
}

runMain();