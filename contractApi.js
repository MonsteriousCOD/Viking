import Web3 from "web3";
import TheVikingsGameArtifact from "./TheVikingsGame.json";

let web3;
let contract; 0xc5Fdf5aBCdD7E9f9275f46a4ACB27865C83B7B67
let userAddress; 0x924cAC385d8eCEFc0f90C7B269813A5Eed1C5541

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      userAddress = await web3.eth.getAccounts()[0];
      initContract();
      return userAddress;
    } catch (error) {
      console.error("User rejected connection:", error);
    }
  } else {
    console.error("Ethereum browser extension not detected!");
  }
}

function initContract() {
  const contractAddress = "<CONTRACT_ADDRESS>";
  contract = new web3.eth.Contract(TheVikingsGameArtifact.abi, contractAddress);
}

function displayUserAddress(address) {
  document.getElementById("userAddress").innerText = address;
}

async function updateTokenPrice() {
  const priceWei = await contract.methods.price().call();
  const priceEth = web3.utils.fromWei(priceWei, "ether");
  document.getElementById("tokenPrice").innerText = `${priceEth} ETH`;
}

async function mintTokens() {
  const quantity = document.getElementById("mintQuantity").value;
  const priceWei = await contract.methods.price().call();
  const totalCost = priceWei * quantity;

  contract.methods
    .mint(quantity)
    .send({ from: userAddress, value: totalCost })
    .on("transactionHash", (hash) => {
      console.log("Transaction Hash:", hash);
    })
    .on("confirmation", (confirmationNumber, receipt) => {
      console.log("Confirmation:", confirmationNumber);
    })
    .on("receipt", (receipt) => {
      console.log("Receipt:", receipt);
    })
    .on("error", (error, receipt) => {
      console.error("Error:", error);
    });
}

document.getElementById("connectButton").addEventListener("click", async () => {
  const userAddress = await connectWallet();
  displayUserAddress(userAddress);
  updateTokenPrice();
});

document.getElementById("mintButton").addEventListener("click", mintTokens);
