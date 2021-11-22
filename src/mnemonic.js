// generate mnemonic
const bip39 = require('bip39');
bip39.setDefaultWordlist('EN');
let mnemonic = bip39.generateMnemonic();
module.exports = mnemonic;