function Flights() {
    function calculateNumberOfFlights(a, b){
        if (a < 0){
            return "The number of passengers must be a positive integer value"
        } else if (b < 0){
            return "The capacity of the flight must be a positive integer value"
        } else if (a % b == 0){
            let c = a / b;
            return c
        } else if (a % b >= 1){
            let c = (a - (a % b)) / b
            return ++c
        };
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
    } else if (totalDistance > distanceLimit){
        return "Error"
    };
   }

   return {calculateNumberOfFlights, checkAircraftRevision};
   module.exports = Flights();
};



