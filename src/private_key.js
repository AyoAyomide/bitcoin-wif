// get private key from seed
const HDKey = require('hdkey');
const ErrorHook = require('./error/error_hook');

function PRIVATE_KEY(seed) {
    try {
        if (!seed || /^\s*$/.test(seed)) throw 'Seed is empty';
        if ((Buffer.from(seed).length * 4) !== 512) throw "Seed length is less than 512 byte";
        const hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'));
        return hdkey.privateKey.toString('hex');
    }
    catch (error) {
        ErrorHook({ error, message: 'error converting seed to private key' });
    }
}

module.exports = PRIVATE_KEY;