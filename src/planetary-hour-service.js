const PlanetaryHourRepository = require('./planetary-hour-repository');
const SolarCalc = require('solar-calc');

class PlanetaryHourService {
  constructor() {
    const self = this;
    self.planetaryHourRepository = new PlanetaryHourRepository();
  }
  getPlanetaryHours() {
    const self = this;
    return self.planetaryHourRepository.getPlanetaryHours();
  }
  getPlanetaryHour(date, lat, long) {
    const self = this;

    // get sunrise
    const solar = new SolarCalc(date, lat, long);
    const { sunrise } = solar.sunrise;
    // get sunset
    const { sunset } = solar.sunset;

    let planetaryHour;
    let period;

    // if time before sunset
    if (date.valueOf() <= sunset.valueOf()) {
      // work out differece in time between sunrise and sunet
      const morningMinutes = (sunset.valueOf() - sunrise.valueOf()) / 60000;
      // divide morning time by 12
      const morningHour = morningMinutes / 12;
      // look up planet
      const minutesFromSunrise = (date.valueOf() - sunrise.valueOf()) / 60000;

      planetaryHour = Math.round(minutesFromSunrise / morningHour);
      period = 'sunrise';
    } else {
      // get sunrise for next day
      const tomorrowDate = new Date();
      tomorrowDate.setDate(date.getDate() + 1);
      const solarTomorrow = new SolarCalc(tomorrowDate, lat, long);
      const tomorrowSunrise = solarTomorrow.sunrise;

      // work out time between sunset and next day
      const eveningMinutes = (tomorrowSunrise.valueOf() - sunset.valueOf()) / 60000;
      // divide night time by 12
      const eveningHour = eveningMinutes / 12;

      // minutes from sunet
      const minutesFromSunet = (date.valueOf() - sunset.valueOf()) / 60000;

      planetaryHour = Math.round(minutesFromSunet / eveningHour);
      period = 'sunset';
    }

    const dayNumber = date.getDay();
    let dayName;
    switch (dayNumber) {
      case 0: dayName = 'sunday';
        break;
      case 1: dayName = 'monday';
        break;
      case 2: dayName = 'tuesday';
        break;
      case 3: dayName = 'wednesday';
        break;
      case 4: dayName = 'thursday';
        break;
      case 5: dayName = 'friday';
        break;
      case 6: dayName = 'saturday';
        break;
      default:
        break;
    }

    const planetaryHours = self.getPlanetaryHours();
    const planet = planetaryHours[dayName][period][planetaryHour];
    return planet;
  }
}

module.exports = PlanetaryHourService;
