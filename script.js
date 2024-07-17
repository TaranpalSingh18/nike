
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let cardNumInput =  
    document.querySelector('#cardNum') 
  
cardNumInput.addEventListener('keyup', () => { 
    let cNumber = cardNumInput.value 
    cNumber = cNumber.replace(/\s/g, "") 
  
    if (Number(cNumber)) { 
        cNumber = cNumber.match(/.{1,4}/g) 
        cNumber = cNumber.join(" ") 
        cardNumInput.value = cNumber 
    } 
})

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    // Perform any actions you need before redirection here
    // For example, form validation or data processing

    // If you need to prevent the default form submission
     event.preventDefault();
    // And then manually redirect if needed
     window.location.href = 'thankyou.html';
});
