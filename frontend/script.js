const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const contact = {

email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
firstName: document.getElementById("firstName").value,
lastName: document.getElementById("lastName").value,
city: document.getElementById("city").value,
state: document.getElementById("state").value

};

const response = await fetch("http://localhost:5000/api/contacts",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(contact)

});

const data = await response.json();

document.getElementById("message").innerText = data.message;

form.reset();

});
