// generate mnemonic
const bip39 = require('bip39');
const ErrorHook = require('./error/error_hook');
class PHRASE {
    constructor() {
        bip39.setDefaultWordlist('EN');
    }
    generate() {
        return bip39.generateMnemonic();
    }
    seed(mnemonic) {
        let error;
        if (!mnemonic || /^\s*$/.test(mnemonic)) error = "phrase is empty";
        if (mnemonic.trim().split(/\s+/g).length !== 12) error = "phrase is less than 12";
        if (error) ErrorHook({ error, message: 'unable to convert mnemonic to seed' })
        return bip39.mnemonicToSeedSync(mnemonic).toString('hex');
    }
}

module.exports = PHRASE;