import {expect} from 'chai';

import capitalize from '../src/capitalize.js'



describe('capitalize.js', function(){
    it('Test capitalizing from upper case', function(){
        expect(capitalize("ASDF")).to.equal("Asdf")
    });

    it('Test capitalizing from lower case', function(){
        expect(capitalize("asdf")).to.equal("Asdf")
    });

    it('Test capitalizing, empty string', function(){
        expect(capitalize("")).to.equal("")
    });




});