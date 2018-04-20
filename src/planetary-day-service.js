const PlanetaryDayRepository = require('./planetary-day-repository');

class PlanetaryDayService {
    constructor() {
        const self = this;
        self.planetaryDayRepository = new PlanetaryDayRepository();
    }
    getPlanetgetPlanetaryDay(dayNumber) {
        const self = this;
        self.planetaryDayRepository.getPlanetgetPlanetaryDay(dayNumber);
    }
}