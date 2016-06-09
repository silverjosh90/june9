var expect = require('chai').expect
var Taxi = require('../taxi')
var Passenger = require('../passenger')

describe('Taxi', function(){

  beforeEach(function() {
    taxi = new Taxi('Yellow Cab', 'Union Station')
    tim = new Passenger('Tim', 22)
    bobby = new Passenger('Bobby', 17)
    sally = new Passenger('Sally', 8)
    xavier = new Passenger('Xavier', 50)
    carl = new Passenger('Carl', 27)
    gregory = new Passenger('Gregory', 37)
  });
  it('has a company', function() {
    expect(taxi.company).to.equal('Yellow Cab')
  })
  it('has a default location', function() {
    expect(taxi.location).to.equal('Union Station')
  })
  it('has a passenger property', function(){
    expect(taxi.seats).to.deep.equal([])
  })
  describe('drivesPlaces', function(){
    it('returns previous location when no location is given', function(){
      var location = "Union Station"
      taxi.driveTo('')
      expect(taxi.location).to.equal('Union Station')

    })
    it('location is reset to the destination', function(){
      var location = "Madison Square Garden"
      taxi.driveTo(location)
      expect(taxi.location).to.equal(location)
    })
  describe('passengerPickUp', function(){
    it('does not affect seats array when no passenger is added', function(){
      taxi.passengerPickUp([])
      expect(taxi.seats).to.deep.equal([]);
    })
    it('Adds seats inputed to passenger array', function(){
      taxi.passengerPickUp([tim])
      expect(taxi.seats).to.deep.equal([tim])
    })
    it('Adds multiple seats', function(){
      taxi.passengerPickUp([tim,bobby,sally])
      expect(taxi.seats).to.deep.equal([tim,bobby,sally])
    })
    it('cannot have more than 4-adult seats at a time', function(){
      var params = [tim,bobby,xavier, carl, gregory]
      expect(taxi.passengerPickUp.bind(taxi, params)).to.throw('I dont have room!')
    })
    it('cannot have three adults and one child', function(){
      
      taxi.passengerPickUp([sally])
      params = [bobby,xavier,carl]
      expect(taxi.passengerPickUp.bind(taxi, params)).to.throw('I dont have room!')
    })
  describe('passengerDropOff', function(){
    it('adds no seats remain the same if empty input', function(){
      taxi.passengerDropOff([])
      expect(taxi.seats).to.deep.equal([])
    })
    it('removes a passenger added', function(){
      taxi.passengerPickUp([tim, bobby])
      var newbobby = new Passenger('Bobby', 17)
      taxi.passengerDropOff([bobby])
      expect(taxi.seats).to.deep.equal([tim])
    })

    it('removes multiple seats at a  time', function(){
      taxi.passengerPickUp([tim,bobby,sally])
      taxi.passengerDropOff([tim,bobby])
      expect(taxi.seats).to.deep.equal([sally])
    })
  })
  })
  })
})
