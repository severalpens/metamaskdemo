import { ethers } from "ethers";

const t1_generateAccounts = () => {

    const rawAccount1 = ethers.Wallet.createRandom();
    const account1 = {address: rawAccount1.address, privateKey: rawAccount1.privateKey};
    console.log(account1);
    
    const rawAccount2 = ethers.Wallet.createRandom();
    const account2 = {address: rawAccount2.address, privateKey: rawAccount2.privateKey};
    console.log(account2);

    return {account1, account2}
}


export default t1_generateAccounts;