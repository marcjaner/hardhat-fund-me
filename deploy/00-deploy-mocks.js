const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config.js")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected")
        await deploy("MockV3Aggregator", {
            from: deployer,
            logs: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })

        log("Mocks deployed")
        log("--------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
