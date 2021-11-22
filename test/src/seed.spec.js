const chai = require('chai');
const seed = require('../../src/seed');

describe('Mnemonic to seed', () => {
    context('When mnemonic is empty', () => {
        it('should throw and error : Mnemonic is empty', () => {
            chai.expect(() => { seed() }).to.throw().with.property(
                'error', 'Mnemonic is empty'
            );
        })
    })
    context('When mnemonic is not 12 words', () => {
        it('should throw and error : mnemonic is not 12 words', () => {
            chai.expect(() => { seed('hello world') }).to.throw().with.property(
                'error', 'mnemonic is not 12 words'
            );
        })
    })
    context('When mnemonic is valid', () => {
        it('should return valid seed : reference from Mastering bitcoin book', () => {
            let result = seed('army van defense carry jealous true garbage claim echo media make crunch');
            chai.expect(result).to.equal('5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570');
        })
    })
});