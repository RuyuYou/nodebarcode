'use strict';

function printBarcode(tags) {
    const allDigits = require('../spec/fixtures').loadAllDigits();
    if (tags.length === 5 || tags === 9 || tags === 10) {
        const zipcode = buildZipcode(tags);
        const barcode = buildBarcode(zipcode, allDigits);
        console.log(barcode);
    }
    else {
        console.log('wrong!');
    }
}

function buildZipcode(tags) {
    let code = tags.split('').map(num=>parseInt(num));
    const sum = code.reduce((a, b)=>a + b);
    const checkcode = 10 - sum % 10;
    code.push(checkcode);
    return code;
}

function buildBarcode(zipcode, allDigits) {
    let barcode =zipcode.map((code)=>{
        return allDigits[code];
    }).join('');
    return `|${barcode}|`;
}

module.exports = {
    buildZipcode: buildZipcode,
    buildBarcode: buildBarcode,
    printBarcode:printBarcode
};