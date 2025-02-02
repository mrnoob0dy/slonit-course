function getTotalAmount(customers) {
    let totalAmount = 0;
    customers.forEach((customer) => {
        totalAmount += customer;
    });
    return totalAmount;
}

let mostValuableCustomers = [10000, 20000, 30000];
console.log(getTotalAmount(mostValuableCustomers));
