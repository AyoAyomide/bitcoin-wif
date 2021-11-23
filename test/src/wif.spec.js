const chai = require('chai');
const WIF = require('../../src/wif');
describe('Private key to WIF', () => {
    context('When network is not identified', () => {
        console.log('According to https://bitcoin.stackexchange.com/questions/84116/get-master-private-key-from-bip39-seed');

        it('should throw an Error: Network not identified', () => {
            chai.expect(() => {
                new WIF();
            }).to.throw('Network not identified');
        });
    });
    context('Version', () => {
        it('correct version should be: ef0xJohn', () => {
            let version = new WIF('testnet').appendKeyVersion('0xJohn');
            chai.expect(version).to.equal('ef0xJohn');
        });
    });
    context('Checksum', () => {
        it('correct checksum should be: 619c33....', () => {
            let checksum = new WIF('testnet').checksum('619c335025c7f4012e556c2a58b2506e30b8511b53ade95ea316fd8c3286feb9');
            chai.expect(checksum).to.equal('5ea65746');
        });
    });
    context('When private key is empty', () => {
        it('should throw an Error: private key is empty', () => {
            chai.expect(() => {
                new WIF('testnet').base58WIF();
            }).to.throw().with.property('error', 'private key is empty');
        })
    })
});