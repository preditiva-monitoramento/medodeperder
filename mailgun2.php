<?php

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

  $api_key = 'key-d84f8aeb9af3545623a3c370c0283b63';
  $api_domain = 'medodeperder.com.br';
  $send_to = 'contato@medodeperder.com.br';

  $name = $data['name'];
  $email = $data['email-2'];
  $content = $data['message'];

  $messageBody = "Contato: $email";


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
