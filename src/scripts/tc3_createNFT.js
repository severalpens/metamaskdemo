import { ethers } from "ethers";

//Contract details
const artifact = require("../contracts/NonFungibleTokenContract.json");


export const tc3_createNFT = async function () {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
  const deployment = await factory.deploy(account);
  const contract = await deployment.deployed();
  localStorage.setItem('nft', contract.address);
  return contract.deployTransaction;
}


