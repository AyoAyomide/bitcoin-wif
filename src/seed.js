const bip39 = require('bip39');
const ErrorHook = require('./error/error_hook');

function seed(mnemonic) {
    try {
        if (!mnemonic || /^\s*$/.test(mnemonic)) throw 'mnemonic is empty';
        if (mnemonic.trim().split(/\s+/g).length !== 12) throw 'mnemonic is not 12 words';
        return bip39.mnemonicToSeedSync(mnemonic).toString('hex');
    }
    catch (error) {
        ErrorHook({ error, message: 'unable to convert mnemonic to seed' })
    }
}
module.exports = seed;