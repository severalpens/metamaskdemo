import react from 'react';
import './App.css';

import t1_generateAccounts from './scripts/t1_generateAccounts';
import { t2_getBalance } from './scripts/t2_getBalance';
import { t3_transferEth } from './scripts/t3_transferEth';

// t1_generateAccounts();
// t2_getBalance();
// t3_transferEth();

let globalResults = {results: 'results'};

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: 'results'
    }
    
    this.t1 = this.t1.bind(this);
    this.t2 = this.t2.bind(this);
    this.t3 = this.t3.bind(this);
  }

  async t1(e) {
    e.preventDefault();
    this.setState({ results: 'fetching..' });
    let resultsObject = await t1_generateAccounts();
    globalResults = resultsObject;
    let results = JSON.stringify(resultsObject)
    this.setState({ results});
  }

  async t2(e) {
    e.preventDefault();
    this.setState({ results: 'fetching..' });
    let results = await t2_getBalance();
    this.setState({ results });
  }

  async t3(e) {
    e.preventDefault();
    this.setState({ results: 'fetching..' });
    let results = await t3_transferEth();
    this.setState({ results });
  }

  render() {
    return (
      <div className="App">
        <div className="section">
          <div className="tx">
            <div>t1_generateAccounts: </div>
            <button id="t1" onClick={this.t1}>Generate Accounts</button>
          </div>
          <div className="tx">
            <div>t2_getBalance: </div>
            <button id="t2" onClick={this.t2}>Get Balance</button>
          </div>
          <div className="tx">
            <div>t3_transferEth: </div>
            <button id="t3" onClick={this.t3}>Transfer Eth</button>
          </div>
        </div>
        <div className="section">
          <pre>
        {JSON.stringify(globalResults, null, 2)}       

          </pre>
         </div>
      </div>
    );


  }


}

export default App;
