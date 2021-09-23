import { ethers } from "ethers";

//props
const artifact = require("../contracts/FungibleTokenContract.json");
const contractAddress = localStorage.getItem('ft') || "0x029e773e07894e9A388756b07F46983D4049D3e5";
const recipient = "0x1d72D5c821a742d4BDdf0e206F5cd55164535686";
const amount = ethers.utils.parseEther("1.0");


export const tc2_transferTokens = async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, artifact.abi, signer );
  let transaction = await contract.transfer(recipient,amount);
  let result = await transaction.wait();
  return result;
}




    

