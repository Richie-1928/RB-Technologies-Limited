const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const tel = document.getElementById('tel').value.trim();
const service = document.getElementById('service').value;
const message = document.getElementById('message').value.trim();


function validateForm() {
  
  if (!name || name.length < 2) {
    alert('Name must be at least 2 characters long');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!tel) {
    alert('Please enter your phone number');
    return false;
  }

  if (!service) {
    alert('Please select a service');
    return false;
  }

  if (!message) {
    alert('Please enter a message');
    return false;
  }

  return true;
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (validateForm()) {
           
            const formData = { name, email, tel, service, message };
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Data saved to local storage:', formData);

            form.reset();
            alert('Form submitted and saved successfully!');
        }
    });
});



// Form Validaton //
// const form = document.querySelector('.contact-form');
// const name = document.getElementById('name').value.trim();
// const email =  document.getElementById('email').value.trim();
// const tel =  document.getElementById('tel').value.trim();
// const service =  document.getElementById('service').value.trim();
// const message =  document.getElementById('message').value.trim();

// const validateForm = function(){
//     if (!name || name.lenght < 2){
//         alert("Name must not be less than two characters.");
//         return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)){
//         alert("Please enter correct email address.");
//         return false;
//     }

//     if (!tel){
//         alert("Please enter a valid phone number.");
//         return false;
//     }

//     if (!service){
//         alert("Please select a service or services.")
//         return false;
//     }

//     if (!message){
//         alert("Please enter  a message.")
//         return false;
//     }

//     return true;
// }

// document.addEventListener('DOMContentLoaded', function(e){
//     e.preventDefault();

//     const submitBtn = form.querySelector('button[type="submit"]');

//     submitBtn.addEventListener('click', function(){

//         if (validateForm){
//             const formData = { name, email, tel, service, message};
//             localStorage.setItem('formData', JSON.stringify(formData));
//             console.log('Data saved to local storage:', formData);

//             form.reset();
//             alert('Form saved succefully');
//         }
//     });
// });

