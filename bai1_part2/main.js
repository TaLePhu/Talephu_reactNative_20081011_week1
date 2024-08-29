// 1.Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

// 2.Use the function to calculate the average for both teams
const avgDophins1 = calcAverage(44,23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDophins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);


//3. Create a function 'checkWinner'
function checkWinner(avgDophin, avgKoalas) {
    if(avgDophin >= avgKoalas*2) {
        console.log(`Dophins win ${avgDophin} vs ${avgKoalas}`);
    } else if(avgKoalas >= avgDophin*2) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDophin}`);
    } else {
        console.log('no team win');
    }
}

//4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDophins1, avgKoalas1);
checkWinner(avgDophins2, avgKoalas2);