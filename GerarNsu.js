

//Gerar NSU

function GerarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
  Swal.fire("Segue número de NSU: " + numeroAleatorio)


}
/*
function gerarENviarNSU() {

  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
  Swal.fire("Segue número de NSU: " + numeroAleatorio)


}*/


/*
function gerarENviarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
  Swal.fire("Segue número de NSU: " + numeroAleatorio);

  // Enviar o NSU para o servidor
  fetch('enviar-email.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({ nsu: numeroAleatorio }),
})

  .then(response => response.json())
  .then(data => {
      if (data.success) {
          Swal.fire('NSU enviado por e-mail com sucesso!');
      } else {
          Swal.fire('Erro ao enviar NSU por e-mail. Tente novamente.');
      }
  })
  .catch(error => {
    console.error('Erro ao enviar requisição:', error);
    Swal.fire(`Erro ao enviar NSU por e-mail. Tente novamente. Detalhes: ${error.message}`);
});

}

*/


/*
function gerarENviarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);

  // Enviar o NSU para o servidor
  fetch('enviar-email.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nsu: numeroAleatorio }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao enviar requisição. Código: ' + response.status);
      }
      return response.json();
  })
  .then(data => {
      if (data.success) {
          Swal.fire('NSU enviado por e-mail com sucesso!');
      } else {
          Swal.fire('Erro ao enviar NSU por e-mail. Tente novamente.');
      }
  })
  .catch(error => {
      console.error('Erro ao enviar requisição:', error.message);
      Swal.fire('Erro ao enviar NSU por e-mail. Tente novamente.');
  });
}

function GerarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
  Swal.fire("Segue número de NSU: " + numeroAleatorio);
}

*/


//Gerar NSU
function GerarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
  Swal.fire("Segue número de NSU: " + numeroAleatorio);
}

function gerarENviarNSU() {
  const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);

  // Adiciona uma chamada AJAX para enviar o número gerado por e-mail
  $.ajax({
    type: "POST",
    url: "enviar-email.php",
    data: { nsu: numeroAleatorio }, // Adiciona o NSU aos dados enviados
    success: function(response) {
      Swal.fire("Número de NSU gerado e enviado por e-mail: " + numeroAleatorio);
    },
    error: function(error) {
      Swal.fire("Erro ao enviar o número de NSU por e-mail.");
    }
  });
}

