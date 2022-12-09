document.getElementById('btn-withdrow').addEventListener('click',function(){
    const newWithdrowAmount = getInputfieldValuebyid('withdrow-field');
   const previouswithdrowtotal =gettextelementvaluebyId('total-withdrow');
   const newWithdrowTotal = previouswithdrowtotal + newWithdrowAmount;
   setTextElementvalueById('total-withdrow', newWithdrowTotal);
   const previousBalancetotal = gettextelementvaluebyId('balance-total');
   const newBalanceTotal = previousBalancetotal - newWithdrowAmount;
   setTextElementvalueById('balance-total',newBalanceTotal);
})