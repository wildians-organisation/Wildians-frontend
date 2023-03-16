const NUMBER_OF_MONTHS = 12;

function initializeYearConnections(): number[] {
    let yearConnections = [];

    for (let i = 0; i < NUMBER_OF_MONTHS; ++i) {
        yearConnections[i] = 0;
    }

    return yearConnections;
}

export { initializeYearConnections };
