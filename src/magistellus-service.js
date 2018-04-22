const PlanetaryDayService = require('./planetary-day-service');
const PlanetaryHourService = require('./planetary-hour-service');

class MagistellusService {
  constructor() {
    const self = this;
    self.planetaryDayService = new PlanetaryDayService();
    self.planetaryHourService = new PlanetaryHourService();
  }

  getPlanetaryDay(date) {
    const self = this;
    const dayNames = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNumber = date.getDay();
    const planet = self.planetaryDayService.getPlanetaryDay(dayNumber);
    return `The classical planet corresponding to ${dayNames[dayNumber]} is ${planet}`;
  }

  getPlanetaryHour(date, lat, long) {
    const self = this;
    const planet = self.planetaryHourService.getPlanetaryHour(date, lat, long);
    return `The classical planet corresponding to the current hour is ${planet}`;
  }
}

module.exports = MagistellusService;
