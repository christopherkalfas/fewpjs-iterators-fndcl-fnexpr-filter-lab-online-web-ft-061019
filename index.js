// Code your solution here
function findMatching(array, string) {
    return array.filter( driver => {
        return driver.toLowerCase().indexOf(string.toLowerCase()) !== -1
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}

function matchName(drivers, string) {
    let matches = drivers.filter( driver => {
        return driver.name.toLowerCase().indexOf(string.toLowerCase()) !== -1 
    })
    return matches
}