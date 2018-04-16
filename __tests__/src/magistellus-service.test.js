const MagistellusService = require('./../../src/magistellus-service');

describe('getPlanetaryDay', () => {
    test('test', () => {
        const result = MagistellusService.getPlanetaryDay();
        expect(result).toBe(`The classical planet corresponding to today is The Moon`);
    });
});

describe.only('getPlanetaryHour', () => {
    test('test', () => {
        MagistellusService.getPlanetaryHour();
    });
});

describe('getDateAL', () => {
    test('test', () => {
        const result = MagistellusService.getDateAL();
        expect(result).toBe(`The Anno Lucis year for today is 6018`);
    });
});