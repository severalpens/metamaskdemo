import { ethers } from "ethers";

export const t2_getBalance = async () => {
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts =  await window.ethereum.request({
    method: 'eth_requestAccounts'
  })

  const account1Balance = await provider.getBalance(accounts[0]);
  return ethers.utils.formatEther(account1Balance) 

}
else{
    return {}
}
}



