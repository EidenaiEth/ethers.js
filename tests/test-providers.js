'use strict';

var assert = require('assert');

var providers = require('../providers');
var bigNumberify = require('../utils/bignumber').bigNumberify;

var blockchainData = {
    homestead: {
        balance: {
            address: '0xAC1639CF97a3A46D431e6d1216f576622894cBB5',
            balance: bigNumberify('4918774100000000')
        },
        block3: {
            hash: '0x3d6122660cc824376f11ee842f83addc3525e2dd6756b9bcf0affa6aa88cf741',
            parentHash: '0xb495a1d7e6663152ae92708da4843337b958146015a2802f4193a410044698c9',
            number: 3,
            timestamp: 1438270048,
            nonce: '0x2e9344e0cbde83ce',
            difficulty: 17154715646,
            gasLimit: bigNumberify('0x1388'),
            gasUsed: bigNumberify('0'),
            miner: '0x5088D623ba0fcf0131E0897a91734A4D83596AA0',
            extraData: '0x476574682f76312e302e302d66633739643332642f6c696e75782f676f312e34',
            transactions: []
        },
        transactionReceipt: {
            blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
            blockNumber: 0x3c92b5,
            contractAddress: null,
            cumulativeGasUsed: 0x1cca2e,
            gasUsed:0x14bb7,
            logs: [
                {
                    address: "0x314159265dD8dbb310642f98f50C066173C1259b",
                    blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                    blockNumber: 0x3c92b5,
                    data: "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247",
                    logIndex: 0x1a,
                    topics: [ "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82", "0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae", "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1" ],
                    transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                    transactionIndex: 0x39,
                    transactionLogIndex: 0x0,
                    type:"mined"
                },
                {
                    address: "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef",
                    blockHash: "0x36b4af7f0538559e581c8588f16477df0f676439ea67fe8d7a2ae4abb20e2566",
                    blockNumber: 0x3c92b5,
                    data: "0x000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000595a32ce",
                    logIndex: 0x1b,
                    topics: [ "0x0f0c27adfd84b60b6f456b0e87cdccb1e5fb9603991588d87fa99f5b6b61e670", "0xf0106919d12469348e14ad6a051d0656227e1aba2fefed41737fdf78421b20e1", "0x00000000000000000000000018c6045651826824febbd39d8560584078d1b247"],
                    transactionHash: "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
                    transactionIndex: 0x39,
                    transactionLogIndex: 0x1,
                    type: "mined"
                }
            ],
            "logsBloom": "0x00000000000000040000000000100000010000000000000040000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000200000010000000004000000000000000000000000000000000002000000000000000000000000400000000020000000000000000000000000000000000000004000000000000000000000000000000000000000000000000801000000000000000000000020000000000040000000040000000000000000002000000004000000000000000000000000000000000000000000000010000000000000000000000000000000000200000000000000000",
            "root": "0x9b550a9a640ce50331b64504ef87aaa7e2aaf97344acb6ff111f879b319d2590",
            "status": null,
            "transactionHash": "0xc6fcb7d00d536e659a4559d2de29afa9e364094438fef3e72ba80728ce1cb616",
            "transactionIndex": 0x39
        },
        transactionReceiptByzantium: {
            byzantium: true,
            blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
            blockNumber: 0x444f76,
            contractAddress: null,
            cumulativeGasUsed: 0x15bfe7,
            gasUsed: 0x1b968,
            logs: [
                {
                    address: "0xb90E64082D00437e65A76d4c8187596BC213480a",
                    blockHash: "0x34e5a6cfbdbb84f7625df1de69d218ade4da72f4a2558064a156674e72e976c9",
                    blockNumber: 0x444f76,
                    data: "0x",
                    logIndex: 0x10,
                    topics: [ "0x748d071d1992ee1bfe7a39058114d0a50d5798fe8eb3a9bfb4687f024629a2ce", "0x5574aa58f7191ccab6de6cf75fe2ea0484f010b852fdd8c6b7ae151d6c2f4b83" ],
                    transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
                    transactionIndex: 0x1e,
                    transactionLogIndex: 0x0,
                    type:"mined"
                }
            ],
            logsBloom: "0x00000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000200000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000800000000000000000800000000000000000000000000000000000000",
            status:1,
            transactionHash: "0x7f1c6a58dc880438236d0b0a4ae166e9e9a038dbea8ec074149bd8b176332cac",
            transactionIndex: 0x1e
        }
    },
    kovan: {
        balance: {
            address: '0x09c967A0385eE3B3717779738cA0B9D116e0EcE7',
            balance: bigNumberify('997787946734641021')
        },
        block3: {
             hash: '0xf0ec9bf41b99a6bd1f6cd29f91302f71a1a82d14634d2e207edea4b7962f3676',
            parentHash: '0xf110ecd84454f116e2222378e7bca81ac3e59be0dac96d7ec56d5ef1c3bc1d64',
            number: 3,
            timestamp: 1488459452,
            difficulty: 131072,
            gasLimit: bigNumberify('0x5b48ec'),
            gasUsed: bigNumberify('0'),
            miner: '0x00A0A24b9f0E5EC7Aa4c7389b8302fd0123194dE',
            extraData: '0xd5830105048650617269747986312e31352e31826c69',
            transactions: []
        },
    },
    rinkeby: {
        balance: {
            address: '0xd09a624630a656a7dbb122cb05e41c12c7cd8c0e',
            balance: bigNumberify('3000000000000000000')
        },
        block3: {
            hash: '0x9eb9db9c3ec72918c7db73ae44e520139e95319c421ed6f9fc11fa8dd0cddc56',
            parentHash: '0x9b095b36c15eaf13044373aef8ee0bd3a382a5abb92e402afa44b8249c3a90e9',
            number: 3,
            timestamp: 1492010489,
            nonce: '0x0000000000000000',
            difficulty: 2,
            gasLimit: bigNumberify('0x47e7c4'),
            gasUsed: bigNumberify(0),
            miner: '0x0000000000000000000000000000000000000000',
            extraData: '0xd783010600846765746887676f312e372e33856c696e757800000000000000004e10f96536e45ceca7e34cc1bdda71db3f3bb029eb69afd28b57eb0202c0ec0859d383a99f63503c4df9ab6c1dc63bf6b9db77be952f47d86d2d7b208e77397301',
            transactions: []
        },
    },
    ropsten: {
        balance: {
            address: '0x03a6F7a5ce5866d9A0CCC1D4C980b8d523f80480',
            balance: bigNumberify('21991148575128552666')
        },
        block3: {
            hash: '0xaf2f2d55e6514389bcc388ccaf40c6ebf7b3814a199a214f1203fb674076e6df',
            parentHash: '0x88e8bc1dd383672e96d77ee247e7524622ff3b15c337bd33ef602f15ba82d920',
            number: 3,
            timestamp: 1479642588,
            nonce: '0x04668f72247a130c',
            difficulty: 996427,
            gasLimit: bigNumberify('0xff4033'),
            gasUsed: bigNumberify('0'),
            miner: '0xD1aEb42885A43b72B518182Ef893125814811048',
            extraData: '0xd883010503846765746887676f312e372e318664617277696e',
            transactions: []
        },
        transactionReceipt: {
            blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
            blockNumber: 0x1564d8,
            contractAddress: null,
            cumulativeGasUsed: bigNumberify("0x80b9"),
            gasUsed: bigNumberify("0x80b9"),
            logs: [
                {
                    address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
                    blockHash: "0xc9235b8253fce455942147aa8b450d23081b867ffbb2a1e4dec934827cd80f8f",
                    blockNumber: 0x1564d8,
                    data: "0x00000000000000000000000006b5955a67d827cdf91823e3bb8f069e6c89c1d6000000000000000000000000000000000000000000000000016345785d8a0000",
                    logIndex: 0x0,
                    topics:[ "0xac375770417e1cb46c89436efcf586a74d0298fee9838f66a38d40c65959ffda" ],
                    transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
                    transactionIndex: 0x0,
                    transactionLogIndex: 0x0,
                    type: "mined"
                }
            ],
            logsBloom: "0x00000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000010000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            root: "0xf1c3506ab619ac1b5e8f1ca355b16d6b9a1b7436b2960b0e9ec9a91f4238b5cc",
            transactionHash: "0x55c477790b105e69e98afadf0505cbda606414b0187356137132bf24945016ce",
            transactionIndex: 0x0
        },
        transactionReceiptByzantium: {
            byzantium: true,
            blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
            blockNumber: 0x1e1e3b,
            contractAddress: null,
            cumulativeGasUsed: bigNumberify("0x4142f"),
            gasUsed: bigNumberify("0x1eb6d"),
            logs:[
                {
                    address: "0xCBf1735Aad8C4B337903cD44b419eFE6538aaB40",
                    blockHash: "0x61d343e0e081b60ac53bab381e07bdd5d0815b204091a576fd05106b814e7e1e",
                    blockNumber: 0x1e1e3b,
                    data: "0x000000000000000000000000b70560a43a9abf6ea2016f40a3e84b8821e134c5f6c95607c490f4f379c0160ef5c8898770f8a52959abf0e9de914647b377fa290000000000000000000000000000000000000000000000000000000000001c20000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000355524c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c6a736f6e2868747470733a2f2f6170692e6b72616b656e2e636f6d2f302f7075626c69632f5469636b65723f706169723d455448555344292e726573756c742e584554485a5553442e632e300000000000000000000000000000000000000000",
                    logIndex: 0x1,
                    topics: [ "0xb76d0edd90c6a07aa3ff7a222d7f5933e29c6acc660c059c97837f05c4ca1a84" ],
                    transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
                    transactionIndex: 0x2,
                    transactionLogIndex: 0x0,
                    type: "mined"
                }
            ],
            logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000080000000202000000",
            status: 1,
            transactionHash: "0xf724f1d6813f13fb523c5f6af6261d06d41138dd094fff723e09fb0f893f03e6",
            transactionIndex: 0x2
        },
    },
}

blockchainData['default'] = blockchainData.homestead;

function equals(name, actual, expected) {
    if (expected && expected.eq) {
        if (actual == null) { assert.ok(false, name + ' - actual big number null'); }
        assert.ok(expected.eq(actual), name + ' matches');

    } else if (Array.isArray(expected)) {
        if (actual == null) { assert.ok(false, name + ' - actual array null'); }
        assert.equal(actual.length, expected.length, name + ' array lengths match');
        for (var i = 0; i < expected.length; i++) {
            equals(name + ' - item ' + i, actual[i], expected[i]);
        }
    } else if (typeof(expected) === 'object') {
        if (actual == null) {
           if (expected === actual) { return; }
           assert.ok(false, name + ' - actual object null');
        }

        var keys = {};
        Object.keys(expected).forEach(function(key) { keys[key] = true; });
        Object.keys(actual).forEach(function(key) { keys[key] = true; });

        Object.keys(keys).forEach(function(key) {
            equals(name + ' - key + ' + key, actual[key], expected[key]);
        });

    } else {
        if (actual == null) { assert.ok(false, name + ' - actual null'); }
        assert.equal(actual, expected, name + ' matches');
    }
}

function testProvider(providerName, networkName) {
    describe(('Read-Only ' + providerName + ' (' + networkName + ')'), function() {
        var provider = null;
        if (networkName === 'default') {
            if (providerName === 'getDefaultProvider') {
                provider = providers.getDefaultProvider();
            } else {
                provider = new providers[providerName]();
            }
        } else {
            if (providerName === 'getDefaultProvider') {
                provider = providers.getDefaultProvider(networkName);
            } else {
                provider = new providers[providerName](networkName);
            }
        }

        it('fetches block #3', function() {
            this.timeout(20000);
            var test = blockchainData[networkName].block3;
            return provider.getBlock(3).then(function(block) {
                for (var key in test) {
                    equals('Block ' + key, block[key], test[key]);
                }
            });
        });

        it('fetches address balance', function() {
            // @TODO: These tests could be fiddled with if someone sends ether to our address
            //  We should set up a contract on each network like:
            //
            //  contract TestBalance {
            //     function resetBalance() {
            //         assert(_owner.send(this.balance - 0.0000314159 ether));
            //     }
            //  }
            this.timeout(100000);
            var test = blockchainData[networkName].balance;
            return provider.getBalance(test.address).then(function(balance) {
                equals('Balance', test.balance, balance);
            });
        });

        function testTransactionReceipt(expected) {
            var title = ('Receipt ' + expected.transactionHash.substring(0, 10) + ' - ');
            return provider.getTransactionReceipt(expected.transactionHash).then(function(receipt) {
                for (var key in receipt) {
                    equals((title + key), receipt[key], expected[key]);
                }
                //equals(('Receipt ' + expected.transactionHash.substring(0, 10)), receipt, expected);
            });
        }

        if (blockchainData[networkName].transactionReceipt) {
            it('fetches pre-Byzantium transaction receipt', function() {
                this.timeout(100000);
                 return testTransactionReceipt(blockchainData[networkName].transactionReceipt);
            });
        }

        if (blockchainData[networkName].transactionReceiptByzantium) {
            it('fetches Byzantium transaction receipt', function() {
                this.timeout(20000);
                return testTransactionReceipt(blockchainData[networkName].transactionReceiptByzantium);
            });
        }

        // Obviously many more cases to add here
        // - getTransactionCount
        // - getCode
        // - getStorageAt
        // - getBlockNumber
        // - getGasPrice
        // - estimateGas
        // - sendTransaction
        // - getTransaction
        // - call
        // - getLogs
        //
        //  Many of these are tested in run-providers, which uses nodeunit, but
        //  also creates a local private key which must then be funded to
        //  execute the tests. I am working on a better test contract to deploy
        //  to all the networks to help test these.
    });
}

['default', 'homestead', 'ropsten', 'rinkeby', 'kovan'].forEach(function(networkName) {
    ['getDefaultProvider', 'InfuraProvider', 'EtherscanProvider'].forEach(function(providerName) {
        testProvider(providerName, networkName);
    });
});

