const chai = require('chai');
const WIF = require('../index');

describe('WIF unit test', () => {
    context('When network is not identified', () => {
        it('should throw an Error: Network not identified', () => {
            chai.expect(() => {
                new WIF();
            }).to.throw('Network not identified');
        })
    })
});
