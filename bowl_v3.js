const frames = [
    [5,3],
    [10],
    [4,6]
];

// const frames = [
//     [5, 3],
//     [10],
//     [10],
//     [10],
//     [6,4],

// ];

const scores = frames.flat();
let gifts = [];

// strike + spare detector
for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const next = frames[i + 1];
    const nextNext = frames[i + 2];

    // STRIKE
    if (frame[0] === 10) {
        if (next) {
            gifts.push(next[0]);

            if (next[1] === undefined && nextNext) {
                gifts.push(nextNext[0]);
            } else if (next[1] !== undefined) {
                gifts.push(next[1]);
            }
        }
    }

    // SPARE
    else if (frame[1] !== undefined && frame[0] + frame[1] === 10) {
        if (next) {
            gifts.push(next[0]);
        }
    }
}

console.log("\n============\nTotal Gifts: "+gifts);
const total = [...scores, ...gifts].reduce((sum, val) => sum + val, 0);
console.log("Total Score: " + total);
