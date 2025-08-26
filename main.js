//toggle feature

document.getElementById("addMoneyBox").addEventListener("click", function(e){
   e.preventDefault();
     document.getElementById("cashOutForm").style.display="none"
     document.getElementById("addMoneyForm").style.display="block"
     document.getElementById("transferMoneyForm").style.display="none"
     document.getElementById("bonusForm").style.display="none"
     document.getElementById("transactionForm").style.display="none"
   
})

document.getElementById("cashoutBox").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("cashOutForm").style.display="block"
     document.getElementById("addMoneyForm").style.display="none"
     document.getElementById("transferMoneyForm").style.display="none"
     document.getElementById("bonusForm").style.display="none"
     document.getElementById("payBillForm").style.display="none"
     document.getElementById("transactionForm").style.display="none"
})
document.getElementById("transferMoneyBox").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("transferMoneyForm").style.display="block"
    document.getElementById("cashOutForm").style.display="none"
     document.getElementById("addMoneyForm").style.display="none"
     document.getElementById("bonusForm").style.display="none"
     document.getElementById("payBillForm").style.display="none"
     document.getElementById("transactionForm").style.display="none"
})
document.getElementById("Bonus Box").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("bonusForm").style.display="block"
    document.getElementById("transferMoneyForm").style.display="none"
    document.getElementById("cashOutForm").style.display="none"
     document.getElementById("addMoneyForm").style.display="none"
     document.getElementById("payBillForm").style.display="none"
     document.getElementById("transactionForm").style.display="none"
})

document.getElementById("payBillBox").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("payBillForm").style.display="block"
    document.getElementById("bonusForm").style.display="none"
    document.getElementById("transferMoneyForm").style.display="none"
    document.getElementById("cashOutForm").style.display="none"
     document.getElementById("addMoneyForm").style.display="none"
     document.getElementById("transactionForm").style.display="none"
})
document.getElementById("transactionBox").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("transactionForm").style.display="block"
    document.getElementById("payBillForm").style.display="none"
    document.getElementById("bonusForm").style.display="none"
    document.getElementById("transferMoneyForm").style.display="none"
    document.getElementById("cashOutForm").style.display="none"
     document.getElementById("addMoneyForm").style.display="none"
})


const validPin =1234;

// add money js function
document.getElementById('AddMoneyButton').addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById("selectBank").value;
    const bankAccountNo=parseInt(document.getElementById("bankAccountNo").value);
   
    const addAmount = parseInt(document.getElementById("addAmount").value);
    const pinNumber = document.getElementById("pinNumber").value;

   const availableBalance= parseInt(document.getElementById("availableBalance").innerText);

   if(bankAccountNo.length<11){
    alert("please enter a valid account no")
    return;
   }
  
   const totalBalance = availableBalance+addAmount;

    document.getElementById("availableBalance").innerHTML=totalBalance;
    alert("Money added successfull")
       
})

// withdrow money js function
document.getElementById('withdrawMoneyButton').addEventListener("click", function(e){
    e.preventDefault();
    const agentNo = document.getElementById("agentNo").value;
   
    const ExpenseAmount = parseInt(document.getElementById("Amount").value);
    const pin = document.getElementById("pin").value;

   const availableBalance= parseInt(document.getElementById("availableBalance").innerText);

   if(agentNo.length<11){
    alert("please enter a valid account no")
    return;
   }
  
   const totalBalance = availableBalance-ExpenseAmount;

    document.getElementById("availableBalance").innerHTML=totalBalance;
    alert("Money Withdrow successfull")
       
})


// Transfer Money js function
document.getElementById("transferMoneyButton").addEventListener("click", function(e){
e.preventDefault();
const UserAccountNo = parseInt(document.getElementById("UserAccountNo").value);
const TransferAmount = parseInt(document.getElementById("TransferAmount").value);
const TransferPin = document.getElementById("TransferPin").value;
})

// Transfer Money js function
document.getElementById("BunusButton").addEventListener("click", function(e){
e.preventDefault();

const BonusCupon = document.getElementById("BonusCupon").value;
})

