const indificationNumber = require('./indificationNumber')

describe('indificationNumber', ()=>{
    test('indificationNum', ()=>{
        expect(indificationNumber(2, 1)).toBe(3);
        expect(indificationNumber(2, 1)).toBeLessThan(4);
        expect(indificationNumber(2, 1)).toBeGreaterThan(2);
        expect(indificationNumber(2, 1)).not.toBeUndefined();

        expect(indificationNumber(-2, 1)).toBe(-2);
        expect(indificationNumber(-2, 1)).toBeLessThan(-1);
        expect(indificationNumber(-2, 1)).toBeGreaterThan(-3);
        expect(indificationNumber(-2, 1)).not.toBeUndefined();

        expect(indificationNumber(-2, -1)).toBe(2);
        expect(indificationNumber(-2, -1)).toBeLessThan(3);
        expect(indificationNumber(-2, -1)).toBeGreaterThan(1);
        expect(indificationNumber(-2, -1)).not.toBeUndefined();
    })
   
})