document
  .getElementById("noakhali-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhaliFormValue = parsingValue("noakhali-form");
    const noakhaliAmountValue = parsingInnerValue("noakhali-amount");
    const totalInnerAmount = parsingInnerValue("total-amount");

    if (
      isNaN(noakhaliFormValue) ||
      noakhaliFormValue <= 0 ||
      noakhaliFormValue > totalInnerAmount
    ) {
      alert("Please enter a valid amount");
      return;
    }

    const totalAmount = noakhaliAmountValue + noakhaliFormValue;



    const noakhaliTitle = document.getElementById("noakhali-title").innerText;

    const data = new Date();
    const dateValue = data.toLocaleDateString();
    const timeValue = data.toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML = `
    <p class="font-semibold text-base"> ${noakhaliFormValue} tk is donated to ${noakhaliTitle}</p>
    <p class="font-semibold text-base">Date: ${dateValue} at ${timeValue}</p>
   
    `;
    document.getElementById("history-section").appendChild(div);

    document.getElementById("noakhali-amount").innerText = totalAmount;
    // if(totalInnerAmount< noakhaliFormValue){
    //     alert('Donation is more than target amount. Please donate less than target amount.');
    //     return;
    // }

    const totalInnerAmountValue = totalInnerAmount - noakhaliFormValue;

    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });



// new section

document
  .getElementById("feni-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniFormValue = parsingValue("feni-form");
    const feniAmountValue = parsingInnerValue("feni-amount");
    const totalInnerAmount = parsingInnerValue("total-amount");

    if (
      isNaN(feniFormValue) ||
      feniFormValue <= 0 ||
      feniFormValue > totalInnerAmount
    ) {
      alert("Please enter a valid amount");
      return;
    }

    const totalAmount = feniAmountValue + feniFormValue;

    const feniTitle = document.getElementById("feni-title").innerText;

    const data = new Date();
    const dateValue = data.toLocaleDateString();
    const timeValue = data.toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML = `
    <p class="font-semibold text-base"> ${feniFormValue} tk is donated to ${feniTitle}</p>

        <p class="font-semibold text-base">Date: ${dateValue} at ${timeValue}</p>

   
    `;
    document.getElementById("history-section").appendChild(div);

    document.getElementById("feni-amount").innerText = totalAmount;

    // if(totalInnerAmount<feniFormValue){
    //     alert('Donation is more than target amount. Please donate less than target amount.');        return;
    // }
    const totalInnerAmountValue = totalInnerAmount - feniFormValue;
    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });


  // new section

document
  .getElementById("quota-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const quotaFormValue = parsingValue("quota-form");
    const quotaAmountValue = parsingInnerValue("quota-amount");
    const totalInnerAmount = parsingInnerValue("total-amount");

    if (
      isNaN(quotaFormValue) ||
      quotaFormValue <= 0 ||
      quotaFormValue > totalInnerAmount
    ) {
      alert("Please enter a valid amount");
      return;
    }

    const totalAmount = quotaAmountValue + quotaFormValue;

    const quotaTitle = document.getElementById("quota-title").innerText;

    const data = new Date();
    const dateValue = data.toLocaleDateString();
    const timeValue = data.toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "solid border-[1px] border-slate-200 rounded-lg p-8";

    div.innerHTML = `
    <p class="font-semibold text-base"> ${quotaFormValue} tk is donated to ${quotaTitle}</p>

        <p class="font-semibold text-base">Date: ${dateValue} at ${timeValue}</p>

   
    `;
    document.getElementById("history-section").appendChild(div);

    document.getElementById("quota-amount").innerText = totalAmount;

    // if(totalInnerAmount<quotaFormValue){
    //     alert('Donation is more than target amount. Please donate less than target amount.');        return;
    // }
    const totalInnerAmountValue = totalInnerAmount - quotaFormValue;
    document.getElementById("total-amount").innerText = totalInnerAmountValue;
  });



  document
  .getElementById("my_modal_1").addEventListener("click", function (event) {
    event.preventDefault();
    
})