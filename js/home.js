document.getElementById("donation").addEventListener("click", function(event) {
    event.preventDefault();
    const donation = document.getElementById("donation");
    donation.style.backgroundColor = '#B4F461';
    const history = document.getElementById("history");
    history.style.backgroundColor = 'white';
    history.style.borderColor = 'gray-200';
    
    showSection("donation-section");

});


document.getElementById("history").addEventListener("click", function(event) {
    event.preventDefault();
    const history = document.getElementById("history");
    history.style.backgroundColor = '#B4F461';
    const donation = document.getElementById("donation");
    donation.style.backgroundColor = 'white';
    donation.style.borderColor = 'gray-200';
    showSection("history-section");
});





// document.getElementById("history").addEventListener("click", function(event) {
//     event.preventDefault();
//     const donation = document.getElementById("history");
//     history.style.backgroundColor = '#B4F461';

// });


// body.style.backgroundColor = 'yellow'">