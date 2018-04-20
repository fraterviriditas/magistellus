const PlanetaryDayRepository = require('./planetary-day-repository');

class PlanetaryDayService {
  constructor() {
    const self = this;
    self.planetaryDayRepository = new PlanetaryDayRepository();
  }
  getPlanetaryDay(dayNumber) {
    const self = this;
    return self.planetaryDayRepository.getPlanetaryDay(dayNumber);
  }
}

module.exports = PlanetaryDayService;
