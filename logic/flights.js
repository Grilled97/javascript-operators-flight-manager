function Flights() {
    function calculateNumberOfFlights(passengers, capacity){
        let flights;

        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }
        
        
        if(passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }

        return flights;
    }

   function checkAircraftRevision(distanceLimit, distancesArray){
    let totalDistance = distancesArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        );
    if (totalDistance <= (distanceLimit * 0.5)){
        return "The revision needs to be done within the next 3 months"
    } else if (totalDistance > (distanceLimit * 0.5) && totalDistance <= (distanceLimit * 0.75 )){
        return "The revision needs to be done within the next 2 months"
    } else if (totalDistance > (distanceLimit * 0.75) && totalDistance <= distanceLimit ){
        return "The revision needs to be done within the next month"
    };
    
    if (totalDistance > distanceLimit){
        throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer. You need to make the revision immediatly.")
    }
   }

   return {calculateNumberOfFlights, checkAircraftRevision};
   
}

module.exports = Flights();



