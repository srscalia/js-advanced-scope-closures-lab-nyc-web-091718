function produceDrivingRange(blockRange) {
  return function(beginning, end) {
    let start = parseInt(beginning)
    let ending = parseInt(end)
    let distance = Math.abs(ending-start)
    let difference = blockRange - distance
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  };
}

function produceTipCalculator(percent){
  return function(fare){
    return percent*fare
  }
}

function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
