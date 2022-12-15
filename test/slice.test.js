import {expect} from 'chai';

import slice from '../src/slice.js'

describe('slice.js', function(){
    it('slice list', function(){
        expect(slice([1,2,3,4,5], 2)).to.eql([3,4,5])
    });

    it('slice empty list', function(){
        expect(slice([], 2)).to.eql([])
    });

    it('slice larger than list', function(){
        expect(slice([2, 3], 5)).to.eql([])
    });

    it('NaN slice', function(){
        expect(slice([2, 3], NaN)).to.eql([])
    });

    it('Negative integer', function(){
        expect(slice([2, 3], -2)).to.eql([2,3])
    });

    it('zero integer', function(){
        expect(slice([2, 3], 0)).to.eql([2,3])
    });

    it('null list ', function(){
        expect(slice(null, 2)).to.eql([])
    });

    it('End integer also', function(){
        expect(slice([1,2,3,4,5,6], 2, 5)).to.eql([3,4,5])
    });

    it('End integer also', function(){
        expect(slice([1,2,3,4,5,6], 2, 5)).to.eql([3,4,5])
    });

    it('End integer is negative', function(){
        expect(slice([2,3,4,5,1], 1, -1)).to.eql([3,4,5])
    });

    it('both integers are null', function(){
        expect(slice([2,3,4,5,1], null, null)).to.eql([])
    });

    it('everything is null', function(){
        expect(slice(null, null, null)).to.eql([])
    });


});