/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"] */
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 * */


const Alexa = require('alexa-sdk');
const MagistellusService = require('./src/magistellus-service');

//= ========================================================================================================================================
// TODO: The items below this comment need your attention.
//= ========================================================================================================================================

// Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
// Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'No question! Frater Viriditas is the mighty-est wizard of them all.';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Hail and farewell!';

//= ========================================================================================================================================
// TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//= ========================================================================================================================================
const data = [
  'A year on Mercury is just 88 days long.',
  'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
  'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
  'On Mars, the Sun appears about half the size as it does on Earth.',
  'Earth is the only planet not named after a god.',
  'Jupiter has the shortest day of all the planets.',
  'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
  'The Sun contains 99.86% of the mass in the Solar System.',
  'The Sun is an almost perfect sphere.',
  'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
  'Saturn radiates two and a half times more energy into space than it receives from the sun.',
  'The temperature inside the Sun can reach 15 million degrees Celsius.',
  'The Moon is moving approximately 3.8 cm away from our planet every year.',
];

//= ========================================================================================================================================
// Editing anything below this line might break your skill.
//= ========================================================================================================================================

const handlers = {
  'LaunchRequest': function () {
    this.response.speak('Welcome to Magistellus');
    this.emit(':responseReady');
  },
  'PlanetaryDayIntent': function () {
    const itemSlot = this.event.request.intent.slots.Item;
    if (itemSlot && itemSlot.value) {
      const date = new Date(itemSlot.value);
      const magistellusService = new MagistellusService();
      const result = magistellusService.getPlanetaryDay(date);
      this.response.speak(result);
      this.emit(':responseReady');
    } else {
      this.response.speak('Please specify a date to calculate the planetary hour for.');
      this.emit(':responseReady');
    }
  },
  'PlanetaryHourIntent': function () {
    const magistellusService = new MagistellusService();
    const lat = 52.630886;
    const long = 1.297355;
    const date = new Date();
    const result = magistellusService.getPlanetaryHour(date, lat, long);
    this.response.speak(result);
    this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'Unhandled': function () {
    this.response.speak('I did not understand your request.');
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
