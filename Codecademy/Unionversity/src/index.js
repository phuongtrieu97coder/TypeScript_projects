"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    let events;
    if (options.eventType == 'courses') {
        events = courses_1.default;
    }
    else {
        events = studyGroups_1.default;
    }
    return events.filter(event => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
;
let searchResults = searchEvents({
    query: 'art',
    eventType: 'courses'
});
console.log(searchResults);
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
enroll(searchResults[0]);
console.log(enrolledEvents);
