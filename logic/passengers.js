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

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, 
        nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight){
            let vipPassengersWithBusinessSeat = 0,
                vipPassengersWithEconomySeats = 0,
                regularSeatedBusiness = 0,
                regularSeatedEconomy = 0,
                vipUnseated = 0,
                economyUnseated = 0;

            for (let passenger of vipPassengers) {
                if (businessSeatsPerFlight > 0) {
                    businessSeatsPerFlight--;
                    vipPassengersWithBusinessSeat++;
                } else if (economySeatsPerFlight > 0) {
                    economySeatsPerFlight--;
                    vipPassengersWithEconomySeats++;
                } else {
                    vipUnseated;
                }
            }

            for (let passenger of regularPassengers) {
                if (businessSeatsPerFlight > 0) {
                    businessSeatsPerFlight--;
                    regularPassengersWithBusinessSeat++;
                } else if (economySeatsPerFlight > 0) {
                    economySeatsPerFlight--;
                    regularPassengersWithEconomySeats++;
                } else {
                    economyUnseated++;
                }
            }

            return{
                vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeat,
                vipPassengersWithEconomySeats: vipPassengersWithEconomySeats,
                regularPassengersWithBusinessSeat: regularPassengersWithBusinessSeat,
                regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
                }
        }




    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
    module.exports = Passengers();
}

