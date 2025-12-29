function enviar(){
  emailjs.send("SERVICE_ID","TEMPLATE_ID",{
    to_email: document.getElementById("email").value,
    message: document.getElementById("resposta").innerText
  });
  alert("Resultado enviado!");
}
