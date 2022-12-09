'use strict';

const flight = 'LH234';

const Aisha = {
    name : "Aisha Hassan",
    passport : 24567890
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'MRS.' + passenger.name;

    if (passenger.passport) {
        alert('Checked in')
        
    }else{
        alert ('Wrong passport!')
    }
}

checkIn(flight,Aisha);

checkIn(flight,Aisha);
console.log(flight);
console.log(Aisha);
