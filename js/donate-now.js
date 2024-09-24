document
  .getElementById("noakhali-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliFormValue = parsingValue("noakhali-form");

if(isNaN(noakhaliFormValue) || noakhaliFormValue<=0){
    alert('Please enter a valid amount');
    return;
    
}

    const noakhaliAmountValue = parsingInnerValue("noakhali-amount");

    const totalAmount = noakhaliAmountValue + noakhaliFormValue;

    document.getElementById("noakhali-amount").innerText = totalAmount;
    const totalInnerAmount= parsingInnerValue("total-amount");
if(totalInnerAmount<=0){
    alert('Donation is not possible');
    return;
}

    const totalInnerAmountValue = totalInnerAmount - noakhaliFormValue;

    document.getElementById("total-amount").innerText = totalInnerAmountValue;

  });

document
  .getElementById("feni-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniFormValue = parsingValue("feni-form");

    if(isNaN(feniFormValue) || feniFormValue<=0){
        alert('Please enter a valid amount');
        return;
        
    }
    

    const feniAmountValue = parsingInnerValue("feni-amount");

    const totalAmount = feniAmountValue + feniFormValue;
    document.getElementById("feni-amount").innerText = totalAmount;

    const totalInnerAmount = parsingInnerValue("total-amount");
    if(totalInnerAmount<=0){
        alert('Donation is not possible');
        return;
    }
    const totalInnerAmountValue = totalInnerAmount -feniFormValue;
    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });

document
  .getElementById("quota-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const quotaFormValue = parsingValue("quota-form");
    if(isNaN(quotaFormValue) || quotaFormValue<=0){
        alert('Please enter a valid amount');
        return;
        
    }
    

    const quotaAmountValue = parsingInnerValue("quota-amount");
    const totalAmount = quotaAmountValue + quotaFormValue;
    document.getElementById("quota-amount").innerText = totalAmount;

    const totalInnerAmount = parsingInnerValue("total-amount");
    if(totalInnerAmount<=0){
        alert('Donation is not possible');
        return;
    }
    const totalInnerAmountValue = totalInnerAmount -quotaFormValue;
    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });



