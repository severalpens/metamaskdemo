import { ethers } from "ethers";

export const t3_transferEth = async function () {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const account2 =   {
      address: "0x1fd7a4B0f572e8D3483d5D42437FF541C0CD51dD",
      privateKey: "0xf9c5b2d93f1a71ef0ea796623a41a26519dd40525b612820b6c22c09e03920c8"
    }
    
    let tx = await signer.sendTransaction({
      to: account2.address,
      value: ethers.utils.parseEther("0.001")
    });
    
    console.log("Transaction request successfully sent! See Etherscan for details:");
    console.log(`https://rinkeby.etherscan.io/tx/${tx.hash}`);
    console.log("Now just waiting for transaction to be completed..");
    
  let completedTransaction = await tx.wait();
  delete(completedTransaction.logsBloom);
  console.log("Transaction request successfully sent! Details:");
  console.log(completedTransaction);
  return completedTransaction;
}

