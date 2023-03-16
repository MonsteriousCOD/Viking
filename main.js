const contractAddress = "0x8c391a28A2511869A50B6AC6b282Cc957dE73003";
const abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
},
{
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
},
{
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
},
{
    "inputs": [],
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error"
},
{
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
},
{
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
},
{
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
},
{
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
},
{
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
},
{
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
},
{
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
},
{
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
},
{
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
    ],
    "name": "ApprovalForAll",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "fromTokenId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "toTokenId",
            "type": "uint256"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "ConsecutiveTransfer",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "baseURI",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "flipSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "getApproved",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }
    ],
    "name": "isApprovedForAll",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "maxFreePerWallet",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "maxPerTx",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "maxPerWallet",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "maxVikings",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
        }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "mintEnabled",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "ownerOf",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "price",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
        }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "uri",
            "type": "string"
        }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_newPrice",
            "type": "uint256"
        }
    ],
    "name": "setPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }
    ],
    "name": "supportsInterface",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "teamMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "teamReserved",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "tokenURI",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
]


let web3;
let contract;
let userAddress;

let walletProvider = {};

// Connecting to Metamask
async function setupWalletConnection(contractAddress, abi, callback) {
  if (window.ethereum === undefined) {
    callback && callback(false);
    console.log("No eth installed");
    return false;
  }

  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  walletProvider.account = accounts[0];

  if (walletProvider.account) {
    console.log(walletProvider.account);

    const nativeWeb3 = new Web3(window.ethereum);
    const tokenContract = new nativeWeb3.eth.Contract(abi, contractAddress);
    walletProvider = { account: walletProvider.account, contract: tokenContract, web3: nativeWeb3 };

    // Assign web3 and contract here
    web3 = nativeWeb3;
    contract = tokenContract;
  }

  userAddress = walletProvider.account;
  callback && callback(!!walletProvider.account);
}

// Add the following event listener here
if (window.ethereum && typeof window.ethereum.on === 'function') {
  window.ethereum.on('accountsChanged', async (accounts) => {
    userAddress = accounts[0];
    updatePrice(document.getElementById('rangeValue').innerText);
  });
} else {
  console.warn('Event listener "accountsChanged" not available for this wallet.');
}

async function mintVikings(quantity) {
  try {
    const gasPrice = await walletProvider.web3.eth.getGasPrice();
    const price = await contract.methods.price().call();
    await contract.methods.mint(quantity)
      .send({ from: userAddress, value: quantity * price, gasPrice: gasPrice });
    console.log("Minted successfully");
  } catch (error) {
    console.error("Minting failed", error);
  }
}

function isContractDefined() {
  return typeof contract !== 'undefined';
}

const mintBtn = document.getElementById('mintBtn');
mintBtn.addEventListener('click', async () => {
  const rangeValue = document.getElementById('rangeValue');
  const quantity = parseInt(rangeValue.innerText);
  await mintVikings(quantity);
});

const connectButton = document.getElementById('connectButton');
connectButton.addEventListener('click', async () => {
  await setupWalletConnection(contractAddress, abi);
});

document.getElementById('mintSlider').addEventListener('input', (event) => {
  const value = event.target.value;
  document.getElementById('rangeValue').innerText = value;
  updatePrice(value);
});

async function updatePrice(quantity) {
  if (isContractDefined()) {
    const price = await contract.methods.price().call();
    const total = web3.utils.fromWei((BigInt(quantity) * BigInt(price)).toString(), 'ether');
    document.getElementById('rangePrice').innerText = `${total} ETH`;
  }
}

async function updateStats() {
  const totalSupply = await contract.methods.totalSupply().call();
  const pod = await contract.methods.pod().call();
  const podInEth = web3.utils.fromWei(pod, 'ether');
  document.getElementById('supply').innerText = `${totalSupply} / 10000`;
  document.getElementById('pod').innerText = `${podInEth} ETH`;
}
