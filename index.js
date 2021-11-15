const phrase = require('./src/phrase_and_seed');
const privateKeyFromSeed = require('./src/private_key');
const wifFromXpriv = require('./src/wif');
const ErrorHook = require('./src/error/error_hook');
class WIF {
    constructor(network) {
        let error;
        this.phrase = new phrase();
        this.initWIF = new wifFromXpriv(network);
    }
    mnemonic() {
        return this.phrase.generate();
    }
    seed(mnemonic) {
        return this.phrase.seed(mnemonic);
    }
    xpriv(seed) {
        return privateKeyFromSeed(seed);
    }
    wif(xpriv) {
        return this.initWIF.base58WIF(xpriv);
    }
}

// let word = "oak quarter fly fabric diamond human rain meadow decide asthma honey spy";
// let seed = "382b1c3805a7fe3fb8c79dd146588cb47013d7598520d987cd44e82765a8c3596dde997a205e0eb58069ee0a00d3cf5aa26a273e5c8ee83727354d76ac51521f";
// let xpriv = "7709595d2804a377d9f6c47b5ba66ca3343991467d4e3351c05c3199c85d0625";
// // xpriv = '619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9';

const sample1PrivateKey = '619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9';
const sample1WIF = '92KuV1Mtf9jTttTrw1yawobsa9uCZGbfpambH8H1Y7KfdDxxc4d';

let key = new WIF('testnet');

let result = key.wif(sample1PrivateKey);
if (result === sample1WIF) {
    console.log('test success');
} else {
    console.log('test fail');
}
