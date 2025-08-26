// login button functionality
document.getElementById("loginButton").addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber =1234567890
    const pinNumber=1234
    
    const mobileNumberValueConverted= parseInt(document.getElementById("number").value);

    
    const pinNumberValueConverted = parseInt(document.getElementById("pin").value);

    if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
        window.location.href='./main.html'
    } else{
        console.log("Invalid Credientel")
    }
})