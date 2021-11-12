// private key to wif
const digestSync = require('crypto-digest-sync');
const bs58 = require('bs58');
const ErrorHook = require('./error/error_hook');
const networkArray = ['testnet', 'mainnet', 'regtest'];
class WIF {
    constructor(privateKey, network) {
        let error;
        if (!privateKey || /^\s*$/.test(privateKey)) error = "xpriv is empty";
        if (!networkArray.includes(network)) error = 'unknown network';
        if (error) ErrorHook({ error, message: 'unable to convert xpriv to wif' });
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

module.exports = WIF;