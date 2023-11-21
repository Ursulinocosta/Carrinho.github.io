



<?php
  /*/ Verifica se a requisição é do tipo POST
  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Método não permitido']);
    exit;
  }

  // Recebe o NSU
  $nsu = isset($_POST['nsu']) ? $_POST['nsu'] : null;

  // Verifica se o NSU foi recebido corretamente
  if ($nsu === null) {
    echo json_encode(['success' => false, 'error' => 'NSU não recebido']);
    exit;
  }

  // Corpo E-mail
  $arquivo = "
    <html>
      <p><b>NSU: </b>$nsu</p>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "sulinocosta@gmail.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  $enviado = mail($destino, $assunto, $arquivo, $headers);

  header('Content-Type: application/json'); // Defina o cabeçalho para indicar que você está respondendo com JSON

  if ($enviado) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false, 'error' => 'Erro ao enviar o e-mail.']);
  }
?>
*/





  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['message']; // Modifica para 'message' que é o nome do campo no formulário
  $nsu = isset($_POST['nsu']) ? $_POST['nsu'] : null; // Adiciona essa linha para obter o NSU

  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Corpo E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p><b>NSU: </b>$nsu</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "sulinocosta@gmail.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
 
  echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>
