let month = 4; 
let season;

switch(month) {
    case 12:
    case 1:
    case 2:
        season = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        season = 'Fall';
        break;
    default:
        season = 'Invalid month';
}

console.log('The season is: ' + season);