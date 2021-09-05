import react from 'react';
import './App.css';
import t1_generateAccounts from './scripts/t1_generateAccounts';
import { t2_getBalance } from './scripts/t2_getBalance';
import { t3_transferEth } from './scripts/t3_transferEth';


let globalResults = { results: 'results' };

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
    this.t1 = this.t1.bind(this);
    this.t2 = this.t2.bind(this);
    this.t3 = this.t3.bind(this);
  }

  async t1(e) {
    e.preventDefault();
    this.setState({ status: 'running t1_generateAccounts..' });
    globalResults = await t1_generateAccounts();
    this.setState({ status: 'completed t1_generateAccounts' });
  }

  async t2(e) {
    e.preventDefault();
    this.setState({ status: 'running t2_getBalance..' });
    globalResults = await t2_getBalance();
    this.setState({ status: 'completed t2_getBalance' });
  }


  async t3(e) {
    e.preventDefault();
    this.setState({ status: 'running t3_transferEth..' });
    globalResults = await t3_transferEth();
    this.setState({ status: 'completed t3_transferEth' });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <div>
              <h1>
                Demo of <a href="https://docs.ethers.io/" target="blank"> Ethers.js </a> and <a href="https://metamask.io" target="blank"> Metamask </a>.
              </h1>

            </div>
            <div>
              <p>See <a href="https://youtube.com/playlist?list=PLH7-GRFbhInaXsLjTgYdfiU7k7yPj3fxT" target="blank">youtube playlist</a>for more info.</p>

            </div>
          </div>
        </div>
        <div className="container">
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
            <div>status: {this.state.status}</div>
            <pre>
              {JSON.stringify(globalResults, null, 2)}

            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
