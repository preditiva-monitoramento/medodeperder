/**/

var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/mailgun3.php';

$('#footer-subscribe').on('submit',function(e) {
  e.preventDefault();

  $('#footer-subscribe *').fadeOut(200);
  $('#footer-subscribe').prepend('Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.');

  $.ajax({
    type     : 'POST',
    cache    : false,
    url      : mailgunURL,
    data     : $(this).serialize(),
    success  : function(data) {
      responseSuccess(data);
      console.log(data);
    },
    error  : function(data) {
      console.log('Silent failure.');
    }
  });

  e.preventDefault();

});

function responseSuccess(data) {

  data = JSON.parse(data);

  if(data.status === 'success') {
    $('#footer-subscribe').html('<p>Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.</p>');
  } else {
    $('#footer-subscribe').html('Submission failed, please contact directly.');
  }

}
