
document.getElementById('btn-deposit').addEventListener('click',function(){
const newdepositamount = getInputfieldValuebyid('deposit-field');
const previousdeposittotal = gettextelementvaluebyId('deposit-total');
const newdepositTotal = previousdeposittotal + newdepositamount;
setTextElementvalueById('deposit-total',newdepositTotal);
const previousBalancetotal = gettextelementvaluebyId('balance-total');
const newBalanceTotal = previousBalancetotal + newdepositamount;
setTextElementvalueById('balance-total',newBalanceTotal);
})