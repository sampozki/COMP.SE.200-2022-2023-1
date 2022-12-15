import {expect} from 'chai';

import map from '../src/map.js'

// From map.js
function square(n) {
    return n * n
    }

describe('map.js', function(){
    it('Test map function', function(){
        expect(map([4, 8], square)).to.eql([16, 64])
    });

    it('Test map function with null', function(){
        expect(map(null, square)).to.eql([])
    });



});