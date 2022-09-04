let Number1Input = document.getElementById("Number1");
let Number2Input = document.getElementById("Number2");
let OperatorInput = document.getElementById("Operator");
let totalInput = document.getElementById("total");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please enter a valid Input."

function calculate()
{
    let Number1InputValue = Number1Input.value;
    let Number2InputValue = Number2Input.value;
    let OperatorInputValue =   OperatorInput.value;

    if(OperatorInputValue === '+')
    {
        
        let Number1 = parseInt(Number1InputValue);
        let Number2 = parseInt(Number2InputValue);
        let calculatedTotal = Number1 + Number2;
        totalInput.value = calculatedTotal;
        errorMessageElement.textContent = "";
    }
    else if(OperatorInputValue === '-')
    { 
        let Number1 = parseInt(Number1InputValue);
        let Number2 = parseInt(Number2InputValue);
        let calculatedTotal = Number1 - Number2;
        totalInput.value = calculatedTotal;
        errorMessageElement.textContent = "";
    }
    else if(OperatorInputValue === '*')
    {
        let Number1 = parseInt(Number1InputValue);
        let Number2 = parseInt(Number2InputValue);
        let calculatedTotal = Number1 * Number2;
        totalInput.value = calculatedTotal;
        errorMessageElement.textContent = "";
    }
   
    else if(OperatorInputValue === "/")
    {
        let Number1 = parseInt(Number1InputValue);
        let Number2 = parseInt(Number2InputValue);
        let calculatedTotal = Number1 / Number2;
        totalInput.value = calculatedTotal;
        errorMessageElement.textContent = "";
    }
    else  
    {
        errorMessageElement.textContent = errorMessage;
    }
   
}























