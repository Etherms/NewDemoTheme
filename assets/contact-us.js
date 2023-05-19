function sendEmail() {
    Email.send({
      SecureToken: "75828b76-2847-4ac6-9a6d-3d625eb3a39a",
      To: "{{ emailAdd }}",
      From: "edsonhermosa2000@gmail.com",
      Subject: "New Contact Form Inquiry",
      Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone: " + document.getElementById("phone").value + "<br> Subject: " + document.getElementById("subject").value + "<br> Message: " + document.getElementById("message").value
    }).then(message => alert(message));
  }