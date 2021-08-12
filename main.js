function computeInvestors () {
    var amount = document.getElementById('amount').value;
    var interest_rate = document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;
    var interest = (amount * 0.25) / months; 
    var payment = (amount / months) .toFixed(2);
    payment = payment.toString() .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
    
}