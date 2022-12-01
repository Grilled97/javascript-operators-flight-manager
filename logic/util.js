function Util() {
    function calculateTotalDistributedPassengers(distributeAllSeatsToAllPassengers){
        return vipPassengersWithBusinessSeats + vipPassengersWithEconomySeats + regularPassengersWithBusinessSeat + regularPassengersWithEconomySeats
    }

    return {calculateTotalDistributedPassengers};
    module.exports = Util();
}

