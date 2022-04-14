require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth shift protect guess knife bone tiger'; 
let testAccounts = [
"0xa2de01ba7fc0fbb8eb2a6af8361a9e958369e0da94f9fb02b1ad1201ea6c59fc",
"0xff69ce8730e3dea805fdd6dec63ba71f430b83cc1d2bfd3193a618d9c05ffab4",
"0xa3f6cd9dd87ce24c0426c9409d8676560f169cfb0b7864633b06150477651dfa",
"0xf0bd223c370471efc5f16198a4ec556a48d9f881f629dd7a49fe384fc7d6b72f",
"0x78bc65e945bb383f88ea366a41a1c148fd5f27d5dd17ce5df4897f9b0ad479fb",
"0xd132c0c3646b256fa8e5f7c7aeca6dbe724c790949499ee5edef7129c0ae0e38",
"0xa9e5779ce6e5b35a3598881f8f484ede90bd114d249bc82966d2255b30a929d1",
"0xa1a7b5bc755398fe6847b24507f9927134a9340a88c89a8860871bd7225fddc0",
"0xaf6c9aa3a707188370e3e78d60318ce30e58c310afcead0a8068c874b4971221",
"0xe39cc3237ff947bf6cba32ea924d56457af7e6021c8b391221b84fbc4b6e01c7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

