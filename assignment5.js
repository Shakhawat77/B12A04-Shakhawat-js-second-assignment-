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
console.log(resultReport(100));