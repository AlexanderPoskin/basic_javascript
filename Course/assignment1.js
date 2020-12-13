'use strict';

const country = 'Ukraine';
const continent = 'Europe';
const population = 46;
// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = false;
const language = 'english';
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;

// console.log(description1);

// const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description2);

if (population > 46) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${46 - population} million below average`);
}

// Predict the result of these 5 operations without executing them:
// '9' - '5'; --> 4
// '19' - '13' + '17'; --> 617
// '19' - '13' + 17; --> 23
// '123' < 57; --> false
// 5 + 6 + '4' + 9 - 4 - 2; --> 1143

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = +prompt('How many neighbour countries does your country have?');
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else console.log('No borders'); 



if (language === 'english' && population < 50 && !isIsland) { 
    console.log(`You should live in ${country}:)`);
} else console.log(`${country} does not meet your criteria :(`);

// Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

switch (language) {
    case 'chinese': 
    case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
        case 'english':
            console.log('3rd place');
            break;
            case 'hindi':
                console.log('Number 4');
                break;
                case 'arabic':
                    console.log('5th most spoken language');
                    break;
                    default: 
                    console.log('Great language too :D');
}

// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`,
    );