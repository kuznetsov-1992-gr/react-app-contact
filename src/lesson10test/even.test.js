const evenNamber = require('./evenNumbers');



describe('validationSeriesNumber', ()=>{
    test('number_100', ()=> {
       expect(evenNamber(100)).toBe(false);
    });

    test('number_0', ()=>{
        expect(evenNamber(0)).toBe(false);
    });

    test('number_50', ()=>{
        expect(evenNamber(50)).toBe(true);
    });

    test('number_99', ()=>{
        expect(evenNamber(99)).toBe(false);
    });

    test('number_33', ()=> {
        expect(evenNamber(33)).toBe(false);
    });
})