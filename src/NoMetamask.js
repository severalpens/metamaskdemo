import './App.css';

function NoMetamask() {
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
          <br/>
          <div className="redalert">
            The Metamask browser extension has not been detected. 
          </div>
          <br/>
          <div className="redalert">
          Please install the <a href="https://metamask.io" target="blank"> Metamask </a>  browser extension.
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMetamask;
