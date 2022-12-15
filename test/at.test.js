import {expect} from 'chai';

import at from '../src/at.js'

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('at.js', function(){
    it('test at() function using its test case', function(){
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, 4])
    });

});