import Web3 from "web3";

const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"; // Replace with your contract address
const ABI = []; // Replace with your contract ABI

// Check if MetaMask is installed
if (typeof window.ethereum !== "undefined") {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

  // Connect to MetaMask
  async function connectWallet() {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0];
  }

  // Mint function
  async function mint(quantity) {
    const account = await connectWallet();
    const price = await contract.methods.price().call();
    const totalCost = price * quantity;

    await contract.methods
      .mint(quantity)
      .send({ from: account, value: totalCost })
      .on("transactionHash", (hash) => {
        console.log("Transaction hash:", hash);
      });
  }
  function displayUserAddress(address) {
    document.getElementById("userAddress").innerText = address;
  }
  
  async function updateTokenPrice() {
    const priceWei = await contract.methods.price().call();
    const priceEth = web3.utils.fromWei(priceWei, "ether");
    document.getElementById("tokenPrice").innerText = `${priceEth} ETH`;
  }
  
  // Example usage
  document.getElementById("connectButton").addEventListener("click", async () => {
    await connectWallet();
  });

  document.getElementById("mintButton").addEventListener("click", async () => {
    const quantity = parseInt(document.getElementById("mintQuantity").value);
    await mint(quantity);
  });
} else {
  alert("MetaMask not found. Please install MetaMask and reload the page.");
}
