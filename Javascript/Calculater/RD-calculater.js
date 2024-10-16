// // RD calculater
MD=100000
months=6
interestRate=5

MI= interestRate / (12 * 100)

 maturityAmount = MD * (((1 + MI) ** months - 1) / MI)
 console.log(maturityAmount)
