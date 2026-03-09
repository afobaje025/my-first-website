document.getElementById("clientForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMessage").innerText =
"Your request has been submitted. I will contact you soon.";

this.reset();

});