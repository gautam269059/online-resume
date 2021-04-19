// Handling contact form through https://formspree.io/
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = '<div class="alert alert-success" role="alert">Thanks you for contacting me. I will reach out to you shortly!</div>';
        form.reset()
      }).catch(error => {
        status.innerHTML = '<div class="alert alert-danger" role="alert">Oops! There was a problem submitting your form!</div>'
      });
    }
    form.addEventListener("submit", handleSubmit)