import react from 'react';
import './App.css';
import t1_generateAccounts from './scripts/t1_generateAccounts';
import { t2_getBalance } from './scripts/t2_getBalance';
import { t3_transferEth } from './scripts/t3_transferEth';
import { tc1_createFungibleContract } from './scripts/tc1_createFungibleContract';
import { tc2_transferTokens } from './scripts/tc2_transferTokens';
import { tc3_createNFT } from './scripts/tc3_createNFT';
import { tc4_transferNFT } from './scripts/tc4_transferNFT';


let globalResults = { results: 'results' };

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
    this.t1 = this.t1.bind(this);
    this.t2 = this.t2.bind(this);
    this.t3 = this.t3.bind(this);
    this.tc1 = this.tc1.bind(this);
    this.tc2 = this.tc2.bind(this);
    this.tc3 = this.tc3.bind(this);
    this.tc4 = this.tc4.bind(this);
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

  async tc1(e) {
    e.preventDefault();
    this.setState({ status: 'running tc1_createFungibleContract..' });
    globalResults = await tc1_createFungibleContract();
    this.setState({ status: 'completed tc1_createFungibleContract' });
  }

  async tc2(e) {
    e.preventDefault();
    this.setState({ status: 'running tc2_transferTokens..' });
    globalResults = await tc2_transferTokens();
    this.setState({ status: 'completed tc2_transferTokens' });
  }

  async tc3(e) {
    e.preventDefault();
    this.setState({ status: 'running tc3_createNFT..' });
    globalResults = await tc3_createNFT();
    this.setState({ status: 'completed tc3_createNFT' });
  }

  async tc4(e) {
    e.preventDefault();
    this.setState({ status: 'running tc4_transferNFT..' });
    globalResults = await tc4_transferNFT();
    this.setState({ status: 'completed tc4_transferNFT' });
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
              <div className="label">t1_generateAccounts: </div>
              <button id="t1" onClick={this.t1}>Generate Accounts</button>
            </div>
            <div className="tx">
              <div className="label">t2_getBalance: </div>
              <button id="t2" onClick={this.t2}>Get Balance</button>
            </div>
            <div className="tx">
              <div className="label">t3_transferEth: </div>
              <button id="t3" onClick={this.t3}>Transfer Eth</button>
            </div>
            <div className="tx">
              <div className="label">tc1_createFungibleContract: </div>
              <button id="tc1" onClick={this.tc1}>Create Fungible Token</button>
            </div>            
            <div className="tx">
              <div className="label">tc2_transferTokens: </div>
              <button id="tc2" onClick={this.tc2}>Transfer Fungible Token</button>
            </div>
            <div className="tx">
              <div className="label">tc3_createNFT: </div>
              <button id="tc3" onClick={this.tc3}>Create NFT</button>
            </div>
            <div className="tx">
              <div className="label">tc4_transferNFT: </div>
              <button id="tc4" onClick={this.tc4}>Transfer NFT</button>
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
