const chai = require('chai');
const mnemonic = require('../../src/mnemonic');

describe('Mnemonic generator', () => {
    it('should return 12 words', () => {
        chai.expect(mnemonic.trim().split(/\s+/g).length).to.equal(12);
    })
})