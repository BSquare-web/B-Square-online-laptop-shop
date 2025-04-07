// Example JavaScript for form validation on the Contact page
Document.querySelector(“form”).addEventListener(“submit”, function(event) {
    Let name = document.getElementById(“name”).value;
    Let email = document.getElementById(“email”).value;
    Let message = document.getElementById(“message”).value;

    If (!name || !email || !message) {
        Alert(“Please fill out all fields before submitting.”);
        Event.preventDefault();
    }
});