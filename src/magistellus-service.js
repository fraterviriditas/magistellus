var SolarCalc = require('solar-calc');

class MagistellusService {

    static getPlanetaryDay() {
        const date = new Date();
        const day = date.getDay();
        let planet = undefined;
        switch(day){
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
        return `The classical planet corresponding to today is ${planet}`;
    };

    static getPlanetaryHour() {

        const planetaryHoursTable = {
            'sunday': {
                'sunrise': {
                    1: 'The Sun',
                    2: 'Venus',
                    3: 'Mercury',
                    4: 'The Moon',
                    5: 'Saturn',
                    6: 'Jupiter',
                    7: 'Mars',
                    8: 'The Sun',
                    9: 'Venus',
                    10: 'Mercury',
                    11: 'The Moon',
                    12: 'Saturn',
                },
                'sunset': {
                    1: 'Jupiter',
                    2: 'Mars',
                    3: 'The Sun',
                    4: 'Venus',
                    5: 'Mercury',
                    6: 'The Moon',
                    7: 'Saturn',
                    8: 'Jupiter',
                    9: 'Mars',
                    10: 'The Sun',
                    11: 'Venus',
                    12: 'Mercury',
                }
            },
            'monday': {
                'sunrise': {
                    1: 'The Moon',
                    2: 'Saturn',
                    3: 'Jupiter',
                    4: 'Mars',
                    5: 'The Sun',
                    6: 'Venus',
                    7: 'Mercury',
                    8: 'The Moon',
                    9: 'Saturn',
                    10: 'Jupiter',
                    11: 'Mars',
                    12: 'The Sun',
                },
                'sunset': {
                    1: 'Venus',
                    2: 'Mercury',
                    3: 'The Moon',
                    4: 'Saturn',
                    5: 'Jupiter',
                    6: 'Mars',
                    7: 'The Sun',
                    8: 'Venus',
                    9: 'Mercury',
                    10: 'The Moon',
                    11: 'Saturn',
                    12: 'Jupiter',
                }
            },
            'tuesday': {
                'sunrise': {
                    1: 'Mars',
                    2: 'The Sun',
                    3: 'Venus',
                    4: 'Mercury',
                    5: 'The Moon',
                    6: 'Saturn',
                    7: 'Jupiter',
                    8: 'Mars',
                    9: 'The Sun',
                    10: 'Venus',
                    11: 'Mercury',
                    12: 'The Moon',
                },
                'sunset': {
                    1: 'Saturn',
                    2: 'Jupiter',
                    3: 'Mars',
                    4: 'The Sun',
                    5: 'Venus',
                    6: 'Mercury',
                    7: 'The Moon',
                    8: 'Saturn',
                    9: 'Jupiter',
                    10: 'Mars',
                    11: 'The Sun',
                    12: 'Venus',
                }
            },
            'wednesday': {
                'sunrise': {
                    1: 'Mercury',
                    2: 'The Moon',
                    3: 'Saturn',
                    4: 'Jupiter',
                    5: 'Mars',
                    6: 'The Sun',
                    7: 'Venus',
                    8: 'Mercury',
                    9: 'The Moon',
                    10: 'Saturn',
                    11: 'Jupiter',
                    12: 'Mars',
                },
                'sunset': {
                    1: 'The Sun',
                    2: 'Venus',
                    3: 'Mercury',
                    4: 'The Moon',
                    5: 'Saturn',
                    6: 'Jupiter',
                    7: 'Mars',
                    8: 'The Sun',
                    9: 'Venus',
                    10: 'Mercury',
                    11: 'The Moon',
                    12: 'Saturn',
                }
            },
            'thursday': {
                'sunrise': {
                    1: 'Jupiter',
                    2: 'Mars',
                    3: 'The Sun',
                    4: 'Venus',
                    5: 'Mercury',
                    6: 'The Moon',
                    7: 'Saturn',
                    8: 'Jupiter',
                    9: 'Mars',
                    10: 'The Sun',
                    11: 'Venus',
                    12: 'Mercury',
                },
                'sunset': {
                    1: 'The Moon',
                    2: 'Saturn',
                    3: 'Jupiter',
                    4: 'Mars',
                    5: 'The Sun',
                    6: 'Venus',
                    7: 'Mercury',
                    8: 'The Moon',
                    9: 'Saturn',
                    10: 'Jupiter',
                    11: 'Mars',
                    12: 'The Sun',
                }
            },
            'friday': {
                'sunrise': {
                    1: 'Venus',
                    2: 'Mercury',
                    3: 'The Moon',
                    4: 'Saturn',
                    5: 'Jupiter',
                    6: 'Mars',
                    7: 'The Sun',
                    8: 'Venus',
                    9: 'Mercury',
                    10: 'The Moon',
                    11: 'Saturn',
                    12: 'Jupiter',
                },
                'sunset': {
                    1: 'Mars',
                    2: 'The Sun',
                    3: 'Venus',
                    4: 'Mercury',
                    5: 'The Moon',
                    6: 'Saturn',
                    7: 'Jupiter',
                    8: 'Mars',
                    9: 'The Sun',
                    10: 'Venus',
                    11: 'Mercury',
                    12: 'The Moon',
                }
            },
            'saturday': {
                'sunrise': {
                    1: 'Saturn',
                    2: 'Jupiter',
                    3: 'Mars',
                    4: 'The Sun',
                    5: 'Venus',
                    6: 'Mercury',
                    7: 'The Moon',
                    8: 'Saturn',
                    9: 'Jupiter',
                    10: 'Mars',
                    11: 'The Sun',
                    12: 'Venus',
                },
                'sunset': {
                    1: 'Mercury',
                    2: 'The Moon',
                    3: 'Saturn',
                    4: 'Jupiter',
                    5: 'Mars',
                    6: 'The Sun',
                    7: 'Venus',
                    8: 'Mercury',
                    9: 'The Moon',
                    10: 'Saturn',
                    11: 'Jupiter',
                    12: 'Mars',
                }
            }
        };

        const lat = 52.630886;
        const long = 1.297355;
        // get current date and ttime
        const date = new Date();
        // get sunrise
        const solar = new SolarCalc(date, lat, long);
        const sunrise = solar.sunrise;
        // get sunset
        const sunset = solar.sunset;

        const planetaryHour;

        // if time before sunset
        if(date.valueOf() <= sunset.valueOf()) {
            // work out differece in time between sunrise and sunet
            const morningMinutes = (sunset.valueOf() - sunrise.valueOf()) / 60000;
            // divide morning time by 12
            const morningHour = morningMinutes / 12;
            // look up planet
            const minutesFromSunrise = (sunrise.valueOf() - date.valueOf()) / 60000;

            const planetaryHour = Math.round(minutesFromSunrise / morningHour);


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

            const planetaryHour = Math.round(minutesFromSunet / eveningHour);

            
        }
    };

    static getDateAL() {
        const date = new Date();
        const alDate = date.getFullYear() + 4000;
        return `The Anno Lucis year for today is ${alDate}`;
    };
    
};

module.exports = MagistellusService;