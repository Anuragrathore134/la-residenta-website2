document.getElementById("leadForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerHTML =
    "✅ Thank you! Our team will contact you shortly.";

    this.reset();
});
