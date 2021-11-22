const mnemonic = require('./src/mnemonic');
const seed = require('./src/seed');
const privateKeyFromSeed = require('./src/private_key');
const wifFromPrivateKey = require('./src/wif');
class WIF {
    constructor(network) {
        let error;
        this.initWIF = new wifFromPrivateKey(network);
    }
    mnemonic() {
        return mnemonic;
    }
    seed(mnemonic) {
        return seed(mnemonic);
    }
    privateKey(seed) {
        return privateKeyFromSeed(seed);
    }
    wif(privateKey) {
        return this.initWIF.base58WIF(privateKey);
    }
}

let MBTC_word = "army van defense carry jealous true garbage claim echo media make crunch";
let MBTC_seed = "5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570";
let MBTC_privateKey = "b2a0d576b828b537688b561f2cfa8dac3602d54c62bde619ad5331e6c235ee26";

let BTC_wiki_privatekey = '0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D';
let BTC_wiki_wif = '5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ';

module.exports = WIF;
