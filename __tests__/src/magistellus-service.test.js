const MagistellusService = require('./../../src/magistellus-service');

describe.only('getPlanetaryDay', () => {
    test('test', () => {
        const magistellusService = new MagistellusService();
        const result = magistellusService.getPlanetaryDay();
        expect(result).toBe(`The classical planet corresponding to today is The Moon`);
    });
});

describe('getPlanetaryHour', () => {
    test('test', () => {
        const lat = 52.630886;
        const long = 1.297355;
        const date = new Date();
        const magistellusService = new MagistellusService();
        magistellusService.getPlanetaryHour(date, lat, long);
    });
});