# Ethers.js Demo Using Metamask and React.js

## STATUS
Only some of the demo modules from the console version have been integrated so far. I'll try and do the others soon. Pull requests always welcome :).
- `t1_generateAccounts` - completed
- `t2_getBalance` - completed
- `t3_transferEth` - completed
- `tc1_createFungibleContract` - completed
- `tc2_transferTokens` - tbc
- `tc3_createNFT` - tbc
- `tc4_transferNFT` - tbc

## Description
This repo contains demo code for interacting with the Ethereum blockchain using the Ethers.js library and Metamask browser plugin.

Pull requests welcome.

## Assumed Knowledge:
- react.js
- ethereum basics
- metamask
- asynchronous javascript

## Setup Requirements
- Metamask browser plugin
- Node & NPM
- VS Code (or similar)
- Terminal window (VS Code inbuilt, powershell, gitbash)
- Compiler requirements
  - See https://docs.soliditylang.org/en/v0.7.4/installing-solidity.html for further details.
  - Most of these requirements may already be installed already (eg git).

## Setup
1. clone the repo: `git clone https://github.com/severalpens/metamaskdemo.git`
1. run `npm install` to install npm packages
1. start the app: `npm start`
1. visit http://localhost:3000 and open developer tools (f12) to see console.log outputs
1. To compile contracts, run `npm i -g truffle` then `truffle compile`


## Tasks/Demos:
- `t1_generateAccounts`: Generate  new Ethereum Accounts
- `t2_getBalance`: Get the balance of an Ethereum Account
- `t3_transferEth`: Transfer Eth balance between two Ethereum Accounts
- `tc1_createFungibleContract`: Create a new contract using ERC20 spec (Fungible Token)
- `tc2_transferTokens`: Transfer tokens between accounts
- `t6_createNFT`: Create a new contract using ERC720 spec (Non Fungible Token)
- `tc4_transferNFT`: Transfer an NFT between Ethereum Accounts


