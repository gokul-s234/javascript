function isFutureDate(dateInput) {
    const inputDate = new Date(dateInput);

    const currentDate = new Date();

    return inputDate > currentDate;
}

const date1 = "2025-02-01"; 
console.log(isFutureDate(date1));