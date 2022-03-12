

//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //console.log(depositAmount)

    //-------------select deposit-total and add ammount-------------
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    console.log(previousDepositAmount, newDepositAmount);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    //console.log(newDepositAmount);

    depositTotal.innerText = newDepositTotal;


    //------------------clear deposit input feild---------------------
    depositInput.value = '';



    //----------------update balance------------
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceAmount + newDepositAmount;



})


//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    //---------------catch new withdraw ammount--------------
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);


    //-------------select withdraw-total and add ammount-------------
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;
    console.log(newWithdrawAmount);


    // ------------------clear deposit input feild---------------------
    withdrawInput.value = '';

    //----------------update balance------------
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceAmount - newWithdrawAmount;



})







