const NUMBER_OF_MONTHS = 12;

function initializeMonthsConnections(): number[] {
    const monthConnections = [];

    for (let i = 0; i < NUMBER_OF_MONTHS; ++i) {
        monthConnections[i] = 0;
    }

    return monthConnections;
}

function addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export { initializeMonthsConnections, addDays };
