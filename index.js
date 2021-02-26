// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers,letters){
    let count = letters.length
    return drivers.filter(driver => driver.slice(0,count) === letters)
}

function matchName(drivers,searchName){
    return drivers.filter(driver => driver.name.toLowerCase() === searchName.toLowerCase())
}

// driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
// fuzzyMatch(driversArray,'Sa')