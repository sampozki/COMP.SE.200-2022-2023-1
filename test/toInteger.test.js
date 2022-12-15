import {expect} from 'chai';

import toInteger from '../src/toInteger.js'

describe('toInteger.js', function(){
    it('toInteger 3.2, should return 3', function(){
        expect(toInteger(3.2)).to.equal(3)
    });

    it('Test toInteger -2.3, should return -2', function(){
        expect(toInteger(-2.3)).to.equal(-2)
    });

    it('Try to translate string to int', function(){
        expect(toInteger("asdf")).to.equal(0)
    });

});