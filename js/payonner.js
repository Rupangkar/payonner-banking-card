
 document.getElementById("deposit-button").addEventListener('click',function (){
    //after click get the input from the input filed
     const depositInputField = document.getElementById('deposit-input');
     const depositInputText = depositInputField.value


     if(parseFloat(depositInputText) <=0){
        return alert('please provide more then 0')
     }

   
    //get the previous deposit and updat deposit total
     const previousDepositTotal = document.getElementById("deposit-total")
     const depositText = previousDepositTotal.innerText
     const totalDeposit = parseFloat(depositInputText) + parseFloat(depositText)
     previousDepositTotal.innerText = totalDeposit;


     //balance update
     const previousBalance = document.getElementById("balance-total");
     const previousBalanceText = previousBalance.innerText;
     const newBalance = parseFloat(previousBalanceText) + parseFloat(depositInputText); 
     previousBalance.innerText = newBalance;

     //clear the input filed
     depositInputField.value = " ";
     

     //press Enter trigger button
//      var clickInput = document.getElementById("deposit-input");
// clickInput.addEventListener('keypress',function(event){
//     if(event.key ==="Enter") {
//         event.preventDefault();
//         document.getElementById("deposit-button").click();
//     }
// });
 

 })  
 
 //witduaw button

 document.getElementById("withdraw-button").addEventListener('click',function () {
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdraeInputText = withdrawInputField.value;
    const withdrawtInputNumber = parseFloat(withdraeInputText)
    if(withdrawtInputNumber <= 0){
        return alert('please provide more then 0')
    }

    //is have Enough Money
   
   
    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previousWithdrawTotal.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = withdrawtInputNumber + previousWithdrawTotalNumber;
    previousWithdrawTotal.innerText = newWithdrawTotal;

    const previousBalance = document.getElementById("balance-total");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceText) 
    const newBalance = previousBalanceNumber - withdrawtInputNumber;
    previousBalance.innerText = newBalance;

     withdrawInputField.value ='';

     if(withdrawtInputNumber > parseFloat(previousBalance.innerText)){
        return alert("সরি দাদা আপনার একাউন্টে টাকা নাই,বোকার মতো টিপাটিপি করে আমার মূল্যবান সময় নষ্ট করবেন না!!!!")
    }

    
 })


