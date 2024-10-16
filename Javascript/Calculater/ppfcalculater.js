// p=50000
// r=7.1
// y=15
//  A = p*((1+r)^y-1)/r*(1+r)
// console.log(A)

function calculatePPF(){
    let Amount = parseFloat(document.getElementById('Amount').value)
    let Year = parseFloat(document.getElementById('Year').value)
    let rate = parseFloat(document.getElementById('rate').value) 

//PPF Calculate Formula

let maturityAmount  = Amount*((1+rate)^Year-1)/rate*(1+rate)
   
    // maturityAmount = maturityAmount.toFixed(2);
    
    document.getElementById('result').innerText = 'Maturity Amount: ₹' + maturityAmount;

}