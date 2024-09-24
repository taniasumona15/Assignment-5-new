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
    // solid border-[1px] border-slate-200 rounded-lg p-8

const noakhaliTitle= document.getElementById("noakhali-title").innerText;

    const div= document.createElement("div");
    div.className="solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML=`
    <p class="font-semibold text-base"> ${noakhaliFormValue} tk is donated to ${noakhaliTitle}</p>
   
    `;
    document.getElementById("history-section").appendChild(div);



    document.getElementById("noakhali-amount").innerText = totalAmount;
    const totalInnerAmount= parsingInnerValue("total-amount");
if(totalInnerAmount< noakhaliFormValue){
    alert('Donation is more than target amount. Please donate less than target amount.');
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


    const feniTitle= document.getElementById("feni-title").innerText;

    const div= document.createElement("div");
    div.className="solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML=`
    <p class="font-semibold text-base"> ${feniFormValue} tk is donated to ${feniTitle}</p>
   
    `;
    document.getElementById("history-section").appendChild(div);



    document.getElementById("feni-amount").innerText = totalAmount;

    const totalInnerAmount = parsingInnerValue("total-amount");
    if(totalInnerAmount<feniFormValue){
        alert('Donation is more than target amount. Please donate less than target amount.');        return;
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


    const quotaTitle= document.getElementById("quota-title").innerText;

    const div= document.createElement("div");
    div.className="solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML=`
    <p class="font-semibold text-base"> ${quotaFormValue} tk is donated to ${quotaTitle}</p>
   
    `;
    document.getElementById("history-section").appendChild(div);


    document.getElementById("quota-amount").innerText = totalAmount;

    const totalInnerAmount = parsingInnerValue("total-amount");
    if(totalInnerAmount<quotaFormValue){
        alert('Donation is more than target amount. Please donate less than target amount.');        return;
    }
    const totalInnerAmountValue = totalInnerAmount -quotaFormValue;
    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });



