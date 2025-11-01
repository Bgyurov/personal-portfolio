function sendMail(event) {
  event.preventDefault(); 

  let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceID = "service_rallp1s";
  const templateID = "template_z95a9nj"; 

  emailjs.send(serviceID, templateID, params)
  .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Съобщението е изпратено успешно!!");
  })
  .catch(err => console.log(err));
}


