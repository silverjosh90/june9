// Drive places
// Pick up passengers
// Drop off passengers

function Taxi(company, location){
  this.company = company;
  this.location = location || 'Union Station'
  this.seats = [];
}

Taxi.prototype.driveTo  = function(drivingDestination){

  this.location = drivingDestination.length ? drivingDestination : this.location

}

Taxi.prototype.passengerPickUp = function(passengerArray){
  underageNew = passengerArray.filter(function(passenger){
    return passenger.age < 12
  })
  underageFormer = this.seats.filter(function(passenger){
    return passenger.age < 12
  })
  underage = underageNew.length + underageFormer.length
  if(underage + this.seats.length + passengerArray.length > 4 ){
    throw new Error('I dont have room! ')
  }
  passengerArray.forEach(function(passenger){
    this.seats.push(passenger);
  }.bind(this))
}

Taxi.prototype.passengerDropOff = function(leavingPassengers){

  this.seats = this.seats.filter(function(passenger){
      return leavingPassengers.indexOf(passenger) == -1
  });
}

module.exports = Taxi;
