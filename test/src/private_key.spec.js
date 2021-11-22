const chai = require('chai');
const privateKey = require('../../src/private_key');
describe('Seed to private key', () => {
    context('When seed is empty', () => {
        console.log('According to https://bitcoin.stackexchange.com/questions/84116/get-master-private-key-from-bip39-seed')
        it('should throw and error : Seed is empty', () => {
            chai.expect(() => { privateKey() }).to.throw().with.property(
                'error', 'Seed is empty'
            );
        })
    });
    context('When seed is not 512 bytes', () => {
        it('should throw and error : Seed is not 512 bytes', () => {
            chai.expect(() => { privateKey('hello world') }).to.throw().with.property(
                'error', 'Seed length is less than 512 byte'
            );
        })
    })

});
