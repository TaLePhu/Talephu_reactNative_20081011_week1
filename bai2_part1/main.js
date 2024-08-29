// Task 1: Calculate the average score for each team
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Data 1
let dolphinsAverage1 = calculateAverage(96, 108, 89);
let koalasAverage1 = calculateAverage(88, 91, 110);
  
  // Task 2: Compare the team's average scores to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg) {
        console.log('Dolphins win the trophy!');
    } else if (koalasAvg > dolphinsAvg) {
        console.log('Koalas win the trophy!');
    } else {
        console.log('It is a draw!');
    }
}
  
  // Check the winner for Data 1
determineWinner(dolphinsAverage1, koalasAverage1);
  
  // Bonus 1: Include a requirement for a minimum score of 100
function determineWinnerWithMinimumScore(dolphinsAvg, koalasAvg) {
    const minScore = 100;

    if (dolphinsAvg > koalasAvg && dolphinsAvg >= minScore) {
        console.log('Dolphins win the trophy with a minimum score of 100!');
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= minScore) {
        console.log('Koalas win the trophy with a minimum score of 100!');
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= minScore && koalasAvg >= minScore) {
        console.log('It is a draw with both teams having a minimum score of 100!');
    } else {
        console.log('No team wins the trophy!');
    }
}
  
// Data Bonus 1
let dolphinsAverageBonus1 = calculateAverage(97, 112, 101);
let koalasAverageBonus1 = calculateAverage(109, 95, 123);

// Check the winner for Data Bonus 1
determineWinnerWithMinimumScore(dolphinsAverageBonus1, koalasAverageBonus1);

// Data Bonus 2
let dolphinsAverageBonus2 = calculateAverage(97, 112, 101);
let koalasAverageBonus2 = calculateAverage(109, 95, 106);

// Check the winner for Data Bonus 2
determineWinnerWithMinimumScore(dolphinsAverageBonus2, koalasAverageBonus2);
  