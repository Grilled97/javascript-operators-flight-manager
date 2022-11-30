function Passengers() {
    checkFlightCapacity(flightCapacity, passengersArray); {
        let totalPassengers = passengersArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue
            );
        
        if (totalPassengers > flightCapacity){
            return "Error"
        } else if (totalPassengers < flightCapacity); {
            return totalPassengers;
        }
    }

    /* vipPassengers, regularPassengers, 
    nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight */
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers.Array(), 
        nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight){
            let vipSeatedBusiness = 0,
                vipSeatedEconomy = 0,
                regularSeatedBusiness = 0,
                regularSeatedEconomy = 0,
                vipUnseated = 0,
                economyUnseated = 0;


        }




    return {checkFlightCapacity}
    module.exports = Passengers();
}

