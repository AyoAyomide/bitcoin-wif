// private key to wif
const bs58 = require('bs58');
const sha256_lib = require('./lib/sha256');
const ErrorHook = require('./error/error_hook');
const networkArray = ['testnet', 'mainnet', 'regtest'];
class WIF {
    constructor(network) {
        this.error;
        if (!networkArray.includes(network)) error = 'unknown network';
        if (this.error) ErrorHook({ error: this.error, message: 'the network is not valid, supported network are testnet,mainnet,regtest' });
        this.network = network;
    }
    appendKeyVersion(key) {
        let verison = this.network === 'mainnet' ? '80' : 'ef';
        return `${verison}${key}`;
    }
    checksum(key) {
        let doubleSha256 = sha256_lib(sha256_lib(this.appendKeyVersion(key))).toUpperCase();
        return doubleSha256.slice(0, 8);
    }
    base58WIF(privateKey) {
        if (!privateKey || /^\s*$/.test(privateKey)) this.error = "private key is empty";
        let buffer = `${this.appendKeyVersion(privateKey)}${this.checksum(privateKey)}`;
        let bytes = Buffer.from(buffer, 'hex');
        let wif = bs58.encode(bytes);
        if (this.error) ErrorHook({ error: this.error, message: 'unable to convert private key to WIF' });
        return wif;
    }
}

module.exports = WIF;