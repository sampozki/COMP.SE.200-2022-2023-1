import {expect} from 'chai';

import isEmpty from '../src/isEmpty.js'

describe('isEmpty.js', function(){
    it('Test with a string', function(){
        expect(isEmpty("This is indeed a string")).to.equal(false)
    });

    it('Test with an empty string', function(){
        expect(isEmpty("")).to.equal(true)
    });

    it('Test with an empty array', function(){
        expect(isEmpty([])).to.equal(true)
    });
    
    it('Test with an array with null values', function(){
        expect(isEmpty([null, null, null])).to.equal(false)
    });
    
    it('Test with a map of null key and value', function(){
        expect(isEmpty({null: null})).to.equal(false)
    });
    
    it('Test with an integer', function(){
        expect(isEmpty(7)).to.equal(true)
    });
    
    it('Test with MAX_SAFE_INTEGER', function(){
        expect(isEmpty(Number.MAX_SAFE_INTEGER)).to.equal(true)
    });
    
    it('Test with a float', function(){
        expect(isEmpty(7.7)).to.equal(true)
    });
    
    it('Test with null', function(){
        expect(isEmpty(null)).to.equal(true)
    });

});