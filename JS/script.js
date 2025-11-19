


function dynamic() {
    document.getElementById("change").innerHTML = "This is External JS";
}

const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        let errors = [];

        if (name.length < 2) {
            errors.push("Name must be at least 2 characters.");
            errors.push("");
        }

        if (!email.includes("@") || !email.includes(".")) {
            errors.push("Please enter a valid email address.");
        }

        if (message.length < 10) {
            errors.push("Message must be at least 10 characters.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    });

function toggleCard(card) {
  card.classList.toggle("open");
}


document.getElementById("clientForm").addEventListener("submit", function(event) {
    
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        event.preventDefault();} 
    else {
        alert("Thank you! Your enquiry has been submitted.");
    }
});
