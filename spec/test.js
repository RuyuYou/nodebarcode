'use strict';

const main = require('../main/main');


describe('printBarcode', ()=> {
    let tags;
    let allDigits;
    beforeEach(()=> {
        tags = '12345';
        allDigits = require('./fixtures').loadAllDigits;
    });

    it('should print zipcode', ()=> {
        const inputs = '12345';
        const zipcode = main.buildZipcode(inputs);
        const expectZipcode = [1, 2, 3, 4, 5, 5];
        expect(zipcode).toEqual(expectZipcode);
    });

    it('should print barcode', ()=> {
        const zipcode = [1, 2, 3, 4, 5, 5];
        const barcode = main.buildBarcode(zipcode, allDigits());
        const expectBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(barcode).toEqual(expectBarcode);
    });

    it('should print printBarcode', ()=> {
        const tags = '12345';
        spyOn(console, 'log');
        main.printBarcode(tags);
        const expectBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
        expect(console.log).toHaveBeenCalledWith(expectBarcode);
    });
});

