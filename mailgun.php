<?php
$email = $_POST['email'];

if(empty($_POST) || !isset($_POST)) {

  ajaxResponse('error', 'Post cannot be empty.');

} else {

  $postData = $_POST;
  $dataString = implode($postData,",");

  $mailgun = sendMailgun($postData);

  if($mailgun) {

    ajaxResponse('success', 'Great success.', $postData, $mailgun);

  } else {

    ajaxResponse('error', 'Mailgun did not connect properly.', $postData, $mailgun);

  }

  if($mailgun1) {

    ajaxResponse('success', 'Great success.', $postData, $mailgun1);

  } else {

    ajaxResponse('error', 'Mailgun did not connect properly.', $postData, $mailgun1);

  }

}

function ajaxResponse($status, $message, $data = NULL, $mg = NULL) {
  $response = array (
    'status' => $status,
    'message' => $message,
    'data' => $data,
    'mailgun' => $mg
    );
  $output = json_encode($response);
  exit($output);
}

function sendMailgun($data) {

  $api_key = 'key-fe2c5b046d9fdd70458fc8cb85d4929a';
  $api_domain = 'medodeperder.com.br';
  $send_to = 'sergio.silva.unb@gmail.com';

  $name = $data['name'] = "Sérgio Silva";
  $email = $data['email'];
  $content = $data['message'] = "Qualquer coisa que não seja importante";

  $messageBody = "Contato: $name $email\n\nMensagem: $content ";


  $config = array();
  $config['api_key'] = $api_key;
  $config['api_url'] = 'https://api.mailgun.net/v3/'.$api_domain.'/messages';

  $message = array();
  $message['from'] = $email;
  $message['to'] = $send_to;
  $message['h:Reply-To'] = $email;
  $message['subject'] = $data['subject'] = "Pare de Perder Produtos por Motivos de Temperatura";
  $message['text'] = $messageBody;

  $curl = curl_init();

  curl_setopt($curl, CURLOPT_URL, $config['api_url']);
  curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($curl, CURLOPT_USERPWD, "api:{$config['api_key']}");
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_POSTFIELDS,$message);

  $result = curl_exec($curl);

  curl_close($curl);
  return $result;

}

?>
