// get private key from seed
const HDKey = require('hdkey');
let seed = 'e20a5f21ab4b126343ae83544d78456ecb55a18da4edccd28dfc19f54b7d7b6217faa2dc8890c8bdab5f880803c859b423def04131dfd03cc3e4abf78ca03626';
const hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'));
const privateKey = hdkey.privateKey.toString('hex').length;
const publicKey = hdkey.publicKey.toString('hex');
const chainCode = hdkey.chainCode.toString('hex');
console.log({ privateKey, publicKey,chainCode });
