// 1
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const total = fare + fare * 0.20 + 30;
    return total;
};

// 2
function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    };
    return str.split(' ').join('').toUpperCase();
};






// 3
function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return "Invalid";
    }
    const team1TotalFoul = player1.foul + player1.cardY + player1.cardR;
    const team2TotalFoul = player2.foul + player2.cardY + player2.cardR;
    if (team1TotalFoul < team2TotalFoul) {
        return player1.name;
    } else if (team2TotalFoul < team1TotalFoul) {
        return player2.name;
    } else {
        return "Tie";
    };
};



// 4
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};


// 5
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    };
    if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
    };
    let totalMark = 0;
    let totalPass = 0;
    let totalFail = 0;

    for (let mark of marks) {
        totalMark += mark;

        if (mark >= 40) {
            totalPass++;
        }
        else {
            totalFail++;
        };
    };
    let average = Math.round(totalMark / marks.length);
    return {
        finalScore: average, pass: totalPass, fail: totalFail
    };
};