const chai = require('chai');
const hd_key = require('../index');

describe('WIF unit test', () => {
    context('When mnemonic is valid', () => {
        it('should return valid seed : reference from Mastering bitcoin book', () => {
            let result = new hd_key('testnet').seed('army van defense carry jealous true garbage claim echo media make crunch');
            chai.expect(result).to.equal('5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570');
        })
    })

    context('When seed is valid', () => {
        it('should return valid private key : reference from Mastering bitcoin book', () => {
            let result = new hd_key('testnet').privateKey('5b56c417303faa3fcba7e57400e120a0ca83ec5a4fc9ffba757fbe63fbd77a89a1a3be4c67196f57c39a88b76373733891bfaba16ed27a813ceed498804c0570');
            chai.expect(result).to.equal('b2a0d576b828b537688b561f2cfa8dac3602d54c62bde619ad5331e6c235ee26');
        })
    })
    context('When private key is valid', () => {
        it('should return valid wallet import format', () => {
            let result = new hd_key('mainnet').wif('0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D');
            chai.expect(result).to.equal('5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ');
        })
    })
});
