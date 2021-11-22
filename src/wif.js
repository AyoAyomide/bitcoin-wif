// private key to wif
const bs58 = require('bs58');
const sha256_lib = require('./lib/sha256');
const ErrorHook = require('./error/error_hook');
const networkArray = ['testnet', 'mainnet', 'regtest'];
class WIF {
    constructor(network) {
        if (!networkArray.includes(network)) ErrorHook({ error: 'unknown network', message: 'the network is not valid, supported network are testnet,mainnet,regtest' });
        this.network = network;
    }
    appendKeyVersion(key) {
        let version = this.network === 'mainnet' ? '80' : 'ef';
        return `${version}${key}`;
    }
    checksum(key) {
        let doubleSha256 = sha256_lib(sha256_lib(this.appendKeyVersion(key)));
        return doubleSha256.slice(0, 8);
    }
    base58WIF(privateKey) {
        try {
            if (!privateKey || /^\s*$/.test(privateKey)) throw 'private key is empty';
            let key = this.appendKeyVersion(privateKey);
            let checksum = this.checksum(privateKey);
            return bs58.encode(Buffer.from(`${key}${checksum}`, 'hex'));
        }
        catch (error) {
            ErrorHook({ error, message: 'unable to convert private key to WIF' });
        }
    }
}

module.exports = WIF;