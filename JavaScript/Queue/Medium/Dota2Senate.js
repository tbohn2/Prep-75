// In the world of Dota2, there are two parties: the Radiant and the Dire.

// The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. 
// In each round, each senator can exercise one of the two rights:

// Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
// Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
// Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

// The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

// Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".

// When all opposite members are banned, the party wins

// For each party, create array of their position in the queue. Then compare the beginning of each array, with whoever has the lower position gets pushed to the back of the queue,
// Simulating the next round
var predictPartyVictory = function (senate) {
    let DP = [];
    let RP = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            RP.push(i);
        } else {
            DP.push(i);
        }
    }

    while (DP.length > 0 && RP.length > 0) {
        const DRep = DP.shift();
        const RRep = RP.shift();

        if (DRep < RRep) {
            DP.push(DRep + senate.length);
        } else {
            RP.push(RRep + senate.length);
        }
    }

    return DP.length > 0 ? 'D Wins' : 'R Wins'
};

console.log(predictPartyVictory("RD"), "R Wins");
console.log(predictPartyVictory("RDD"), "D Wins");
console.log(predictPartyVictory("RDRD"), "R Wins");
console.log(predictPartyVictory("RDDRD"), "D Wins");
console.log(predictPartyVictory("RRRDDDD"), "R Wins"); 