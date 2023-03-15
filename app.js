import { ethers } from "ethers";
import TheVikingsGameArtifact from "./TheVikingsGame.json";

// Connect to the network
let provider = new ethers.providers.Web3Provider(window.ethereum);

// The address that the smart contract is deployed at
let contractAddress = "0xc5Fdf5aBCdD7E9f9275f46a4ACB27865C83B7B67";

// Create a new instance of the smart contract
let contract = new ethers.Contract(contractAddress, TheVikingsGameArtifact.abi, provider);

async function mint(quantity, price, callback) {
    let normalPrice = ethers.utils.parseEther(price.toString()) * quantity;
    console.log(normalPrice);
    let result = {};
    result.success = false;

    const signer = provider.getSigner();
    let gas = await contract.estimateGas.mint(quantity, { from: signer.getAddress(), value: normalPrice });
    gas = Math.round(gas.toNumber() * 1.2);
    
    const tx = await contract.connect(signer).mint(quantity, {
        value: normalPrice,
        gasLimit: gas,
        maxFeePerGas: ethers.utils.parseUnits("100000001", "wei"), // 1.5 Gwei
        maxPriorityFeePerGas: ethers.utils.parseUnits("100000000", "wei"), // 0.5 Gwei
        type: "0x2"
    });

    try {
        const receipt = await tx.wait();
        result.success = true;
        result.data = receipt;
    } catch (err) {
        result.success = false;
        result.data = err;
    }

    callback && callback(result);
    return result;
}
