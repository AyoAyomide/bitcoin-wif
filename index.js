
// generate the mnemonic
const bip39 = require('bip39');
bip39.setDefaultWordlist('EN');
const mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic).toString('hex');
console.log({ mnemonic, seed, entropy })