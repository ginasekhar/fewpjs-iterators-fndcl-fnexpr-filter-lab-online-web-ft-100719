// Code your solution here
function findMatching(drivers, strToMatch) {
     return drivers.filter( eachDriver =>
      eachDriver.toLowerCase() === strToMatch.toLowerCase()
    )
  }
  

  function matchName(drivers, strToMatch) {
    return drivers.filter( eachDriver => eachDriver.name === strToMatch)
  }
  
  function fuzzyMatch(drivers, strToMatch) {
    return drivers.filter( eachDriver =>
        eachDriver.toLowerCase().indexOf(strToMatch.toLowerCase()) === 0
    )
  }
    


