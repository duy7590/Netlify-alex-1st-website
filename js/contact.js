document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        let response = await fetch("http://127.0.0.1:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        document.getElementById("responseMessage").innerText = result.message;
    } catch (error) {
        document.getElementById("responseMessage").innerText = "Error sending message.";
    }
});