'use strict';

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow Card'],
]);

// 1.
const events = new Set([...gameEvents.values()]);
const events2 = [...new Set(gameEvents.values())];
console.log(events);
console.log(events2);

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [k, v] of gameEvents) {
    console.log(k < 46 ? `[FIRST HALF] ${k}: ${v}` : `[SECOND HALF] ${k}: ${v}`);
}