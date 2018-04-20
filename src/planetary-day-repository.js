class PlanetaryDayRepository {

    getPlanetaryDay(dayNumber) {
        let planet = '';
        switch(dayNumber){
            case 0: planet = 'The Sun';
                    break;
            case 1: planet = 'The Moon';
                    break;
            case 2: planet = 'Mars';
                    break;
            case 3: planet = 'Mercury';
                    break;
            case 4: planet = 'Jupiter';
                    break;
            case 5: planet = 'Venus';
                    break;
            case 6: planet = 'Saturn';
                    break;
        }
        return planet;
    }
}

module.exports = PlanetaryDayRepository;