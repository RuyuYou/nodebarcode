'use strict';

const main = require('../main/main');

describe('printBarcode', ()=> {
    let tags;
    let allDigits;
    beforeEach(()=> {
        tags = ['12345'];
        allDigits = require('./fixtures').loadAllDigits;
    });

    it('should print zipcode', ()=> {
        const inputs = ['12345'];
        const zipcode = main.buildZipcode(inputs);
        const expectZipcode = [1, 2, 3, 4, 5];
        expect(zipcode).toEqual(expectZipcode);
    });
});

