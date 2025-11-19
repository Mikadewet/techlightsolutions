


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
