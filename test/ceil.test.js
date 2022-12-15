import {expect} from 'chai';

import ceil from '../src/ceil.js'

describe('ceil.js', function(){
    it('Test without precission parameter', function(){
        expect(ceil(20.1)).to.equal(21)
    });

    it('Test with given precission', function(){
        expect(ceil(3.14, 1)).to.equal(3.2)
    });
    
});