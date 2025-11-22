class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Price: $${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
    
    printTicket() {
        console.log(`Movie: ${this.movieName}`);
        console.log(`Seat: ${this.seatNo}`);
        console.log(`Price: $${this.price}`);
        console.log(`Convenience Fee: $${this.convenienceFee}`);
        console.log(`Total Amount: $${this.getTotalAmount()}`);
    }
}

const ticket1 = new MovieTicket("Inception", "A12", 15.50);
const onlineTicket1 = new OnlineTicket("Interstellar", "B05", 18.00, 2.50);

console.log("Regular Ticket:");
ticket1.printTicket();

console.log("\nOnline Ticket:");
onlineTicket1.printTicket();

console.log("\nCalling prototype method on OnlineTicket:");
MovieTicket.prototype.printTicket.call(onlineTicket1);