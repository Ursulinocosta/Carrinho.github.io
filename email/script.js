function sendEmail() {
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Simula o envio do e-mail para o servidor
    // Você deve implementar a lógica de envio no lado do servidor usando PHP, Node.js, etc.
    // Neste exemplo, estou usando um alerta para mostrar as informações que seriam enviadas.
  
    alert("Assunto: " + subject + "\nMensagem: " + message);
  
    // Aqui, você enviaria os dados para o servidor usando AJAX ou outra técnica.
  }
  