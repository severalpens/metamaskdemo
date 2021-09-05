import t1_generateAccounts from './t1_generateAccounts';
import { t2_getBalance } from './t2_getBalance';
import { t3_transferEth } from './t3_transferEth';

const scripts = () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        return {t1_generateAccounts, t2_getBalance, t3_transferEth}
      }
}


export default scripts;