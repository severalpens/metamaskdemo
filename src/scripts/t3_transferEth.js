import { ethers } from "ethers";
import {chalk} from "chalk";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const account2 = "0xA0e2142EA0b15476bD059071625675B06aDA172c";

export const t3_transferEth = async function () {

  let tx = await signer.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.01")
  });

  console.log("Transaction request successfully sent! See Etherscan for details:");
  console.log(`https://rinkeby.etherscan.io/tx/${tx.hash}`);
  console.log("Now just waiting for transaction to be completed..");
  
  let completedTransaction = await tx.wait();
  delete(completedTransaction.logsBloom);
  console.log("Transaction request successfully sent! Details:");
 console.log(completedTransaction);

}
