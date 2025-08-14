function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const total = fare + fare * 0.20 + 30;
    return total;
}

console.log(totalFine(200));