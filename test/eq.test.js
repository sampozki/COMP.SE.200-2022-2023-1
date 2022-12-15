import {expect} from 'chai';

import eq from '../src/eq.js'

describe('eq.js', function(){
    it('test if 2===2', function(){
        expect(eq(2, 2)).to.equal(true)
    });

    it('test if two strings are same', function(){
        expect(eq("asdf", "asdf")).to.equal(true)
    });

    it('test if two numbers are different', function(){
        expect(eq(2, 1)).to.not.equal(true)
    });

    it('test if empty lists are same', function(){
        expect(eq([], [])).to.not.equal(true)
    });

    it('test if 5 as int and string is same', function(){
        expect(eq(5, "5")).to.equal(true)
    });

    it('Test if Nan is present', function(){
        expect(eq(2, NaN)).to.not.equal(true)
    });

    it('Test if Nan is present', function(){
        expect(eq(NaN, NaN)).to.equal(true)
    });


});