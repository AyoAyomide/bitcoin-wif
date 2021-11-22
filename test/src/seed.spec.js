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
});