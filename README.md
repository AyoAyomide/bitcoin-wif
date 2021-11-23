# Bitcoin wallet import format

This is a bitcoin mnemonic generator and WIF converter. It is based on the [BIP-0039](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).
It generates 12 mnemonic word list, which can be used to generate a seed phrase, and it convert the phrase to private key and the private key is converted to WIF.

## Installation

### Using npm

```bash
npm i firestore_goose
```

### Node.js

```js
const BitcoinWIF = require("bitcoin-wif");
```

### Basic Usage

```js
let network = "testnet";
const btcWIF = new BitcoinWIF(network);
// network can be "mainnet", "testnet" and "regtest"
```

## Example 1 - Generate a mnemonic phrase

```js
let mnemonic = btcWIF.mnemonic();
console.log(mnemonic);
// cactus juice camera muscle recall turkey birth fever dust cactus average impact
```

## Example 2 - Convert mnemonic phrase to seed

```js
let words =
  "army van defense carry jealous true garbage claim echo media make crunch";
let seed = btcWIF.seed(words);
console.log(seed);
//  5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570
```

## Example 3 - Convert seed to private key

```js
let seedResult =
  "5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570";
let privateKey = btcWIF.privateKey(seedResult);
console.log(privateKey);
// b2a0d576b828b537688b561f2cfa8dac3602d54c62bde619ad5331e6c235ee26
```

## Example 4 - Convert private key to WIF

```js
let privateKeyResult =
  "619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9";
let wif = btcWIF.wif(privateKeyResult);
console.log(wif);
// 92KuV1Mtf9jTttTrw1yawobsa9uCZGbfpambH8H1Y7KfdDxxc4d
```

## Reference

- [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc)
- [Seed Prase to private key](https://bitcoin.stackexchange.com/questions/84116/get-master-private-key-from-bip39-seed)
- [Private key to wif : github gist](https://gist.github.com/t4sk/ac6f2d607c96156ca15f577290716fcc)
- [Private key to wif : bitcoin wiki](https://en.bitcoin.it/wiki/Wallet_import_format)
