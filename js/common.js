


function parsingValue(id) {
    const inputValue =document.getElementById(id).value;
    const inputNumber= parseFloat(inputValue);
    return inputNumber;
}


function parsingInnerValue(id){
    const inputValue =document.getElementById(id).innerText;
    const inputNumber= parseFloat(inputValue);
    return inputNumber;
}






function showSection(id) {
document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}


