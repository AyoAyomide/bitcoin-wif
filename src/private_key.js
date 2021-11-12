// get private key from seed
const HDKey = require('hdkey');
const ErrorHook = require('./error/error_hook');

function PRIVATE_KEY(seed) {
    let error;
    if ((Buffer.from(seed).length * 4) !== 512) error = "seed length is less than 512 byte";
    const hdkey = HDKey.fromMasterSeed(Buffer.from(seed));
    if (error) ErrorHook({ error, message: 'invalid seed length' });
    return hdkey.privateKey.toString('hex');
}

module.exports = PRIVATE_KEY;