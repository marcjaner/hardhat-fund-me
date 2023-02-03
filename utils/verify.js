const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().inclues("already verified")) {
            console.log("Contract already verifieds")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
