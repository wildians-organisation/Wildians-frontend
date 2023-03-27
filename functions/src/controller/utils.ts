import * as cors from "cors";

const NUMBER_OF_MONTHS = 12;
const corsHandler = cors({ origin: "*" });

function initializeYearConnections(): number[] {
    let yearConnections = [];

    for (let i = 0; i < NUMBER_OF_MONTHS; ++i) {
        yearConnections[i] = 0;
    }

    return yearConnections;
}

function addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export { corsHandler, initializeYearConnections, addDays };
