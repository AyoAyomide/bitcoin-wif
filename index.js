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
module.exports = WIF;
