var creditLine = 500;
var shopper = {
    firstName: "Todd",
    lastName: "Polak",
    paymentMethod: "Credit",
    availableCredit: creditLine,
    hasCredit: creditLine > 0,
    shopperInfo: function() {
        var fullName = this.firstName + " " + this.lastName;
        if (this.hasCredit) {
            return fullName + " has $" + this.availableCredit + " available credit."
        }
        else {
            return fullName + " does not have any credit.";
        }
    },
    groceryCart: ["steak", "potatoes", "asparagus", "bread", "milk"]
}
console.log(shopper)
console.log(shopper.shopperInfo());
console.table(shopper.groceryCart);