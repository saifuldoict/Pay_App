document.getElementById("addMoneyBox").addEventListener("click", function(e){
   e.preventDefault();
    const visible= document.getElementById("addMoneyForm")
    console.log(visible)
})


const validPin =1234;

document.getElementById('AddMoneyButton').addEventListener("click", function(e){
    e.preventDefault();
    const bank = document.getElementById("selectBank").value;
    const bankAccountNo = document.getElementById("bankAccountNo").value;
    const addAmount = parseInt(document.getElementById("addAmount").value);
    const pinNumber = document.getElementById("pinNumber").value;

   const availableBalance= parseInt(document.getElementById("availableBalance").innerText);

   if(bankAccountNo.length<11){
    alert("please enter a valid account no")
    return;
   }

    
   const totalBalance = availableBalance+addAmount;

    document.getElementById("availableBalance").innerHTML=totalBalance;
      
    
})