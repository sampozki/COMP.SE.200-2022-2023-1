import {expect} from 'chai';

import add from '../src/add.js'



describe('Add.js', function(){
    it('Sum two positive integers', function(){

        expect(add(2, 1)).to.equal(3)
    });

    it('Sum two negative integers', function(){

        expect(add(-2, -1)).to.equal(-3)
    });

    it('2+3 should not be 4', function(){

        expect(add(2, 3)).to.not.equal(3)
    });

});