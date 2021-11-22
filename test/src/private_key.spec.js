const chai = require('chai');
const privateKey = require('../../src/private_key');
describe('Seed to private key', () => {
    context('When seed is empty', () => {
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
    context('When seed is valid', () => {
        it('should return valid private key : reference from Mastering bitcoin book', () => {
            let result = privateKey('5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570');
            chai.expect(result).to.equal('b2a0d576b828b537688b561f2cfa8dac3602d54c62bde619ad5331e6c235ee26');
            console.log('According to https://bitcoin.stackexchange.com/questions/84116/get-master-private-key-from-bip39-seed')
        })
    })
});
