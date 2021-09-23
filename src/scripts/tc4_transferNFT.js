import { ethers } from "ethers";

//Contract details
const artifact = require("../contracts/NonFungibleTokenContract.json");

//Transfer details
const contractAddress = localStorage.getItem('nft') || "0x029e773e07894e9A388756b07F46983D4049D3e5";
let from = "";
let to = "";
let id = 2;
let args = [from, to, id];

export const tc4_transferNFT = async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, artifact.abi, signer );
  let transaction = await contract.transferFrom(...args);
  let result = await transaction.wait();
  return result;
}
