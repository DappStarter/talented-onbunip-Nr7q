require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember universe give problem olympic thing'; 
let testAccounts = [
"0x3d08b15624a21dfae0a83f531d7bf0746617df1e91219d975b108368baa3a4a3",
"0xc93935b0337106e9e574687a2054f8f1994b633671495b834e6aee76477ec088",
"0x4c0711cd49d49b3b30fb993679302f70f1dbefbbb86d44f8e78578e478c84f75",
"0xf1605562bed25e119b744df66100414fd25e5dd024459e750ff505b0d55fb464",
"0xf988f83f0a8b7bd882d3021d2d36ecbc2be78ed1ed8f1398274a79aa89423d7b",
"0x6e296f80a5e594a1238df66e19f754c04f1fc2304f19a152034f8ffc80c53615",
"0x6e01ecae09d8af8754268bd0fc3a231ba9ef3b9ce09469d402ebdf66f868ea42",
"0x26014cbeb35ce04363712fbddf6d3df7452699b12f8ae794bd65aac118337f79",
"0x97c1652a4a6ec2cbaafae6f0ad7033ab070a74e2852d80369b9e7d14d9d87cf3",
"0x3f7635f5732f1fe330388453a10455baf03d8e7b41b1af09e1e1cff5f649564d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


