function Flights() {
    function calculateNumberOfFlights(a, b){
        if (a % b == 0){
            let c = a / b;
            return c
        } else if (a % b >= 1){
            let c = (a - (a % b)) / b
            return ++c
        };
    }
   return {calculateNumberOfFlights};
   module.exports = Flights();
};

