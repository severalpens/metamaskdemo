import './App.css';
import t1_generateAccounts from './scripts/t1_generateAccounts';
import {t2_getBalance} from './scripts/t2_getBalance';
import { t3_transferEth } from './scripts/t3_transferEth';
t1_generateAccounts();
t2_getBalance();
// t3_transferEth();

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
