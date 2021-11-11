const digestSync = require('crypto-digest-sync');
const bs58 = require('bs58');
let privKey = '0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D';
let conKey = '800C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D';
let exptedD2hash = '507A5B8DFED0FC6FE8801743720CEDEC06AA5C6FCA72B07C49964492FB98A714';

privKey = '619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9';
// conKey = 'ef619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9';
// exptedD2hash = '5ea6574663729d86cdc55bc9b7b47eda13a7ae8e4c7bc7084e248f8ddd755cbc';


class WIF {
    constructor(privateKey, network) {
        this.privateKey = privateKey;
        this.network = network;
    }
    appendKeyVersion() {
        let verison = this.network === 'mainnet' ? '80' : 'ef';
        return `${verison}${this.privateKey}`;
    }
    arraybuffer2hex(buffer) {
        let hexCodes = [], i = 0, view = new DataView(buffer);
        for (i; i < view.byteLength; i += 4) {
            let value, stringValue, padding = '00000000', paddedValue;
            value = view.getUint32(i);
            stringValue = value.toString(16);
            paddedValue = (padding + stringValue).slice(-padding.length);
            hexCodes.push(paddedValue);
        }
        return hexCodes.join("");
    }
    hash(hexString) {
        let buffer = new Uint8Array(hexString.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16)));
        let hashDigest = digestSync("SHA-256", buffer);
        return this.arraybuffer2hex(hashDigest);
    }
    doubleSha256() {
        return this.hash(this.hash(this.appendKeyVersion())).toUpperCase();
    }
    checksum() {
        return this.doubleSha256().slice(0, 8);
    }
    base58WIF() {
        let buffer = `${this.appendKeyVersion()}${this.checksum()}`;
        let bytes = Buffer.from(buffer, 'hex');
        let wif = bs58.encode(bytes);
        return wif;
    }
}
let testCase = new WIF(privKey, 'testnet');
let wif = testCase.base58WIF();
console.log(wif);
