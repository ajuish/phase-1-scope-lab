// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    return customerName =  customerName.toUpperCase();    
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = "mack"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "james";
    return leastFavoriteCustomer;
}
// setBestCustomer();
// overwriteBestCustomer();
// console.log(bestCustomer)
// changeLeastFavoriteCustomer();
// console.log(leastFavoriteCustomer)