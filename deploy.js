const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

require('dotenv').config();

// const OPTIONS = {
//     defaultBlock: 'latest',
//     transactionConfirmationBlocks: 1,
//     transactionBlockTimeout: 8
// }
const provider = new HDWalletProvider(
    'defy cloth area idle talk soul cat company disorder aspect sudden still',
    'https://rinkeby.infura.io/v3/14362478042f4242a31bbc9b0d867224',
    4465030
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy to accounts ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({gas:"1000000", from: accounts[0] });

    console.log('Contract deploy to ', result.options.address);
};

deploy();