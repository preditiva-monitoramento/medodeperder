/**/

var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/mailgun2.php';

$('#breaking-subscribe').on('submit',function(e) {
  e.preventDefault();

  $('#breaking-subscribe *').fadeOut(200);
  $('#breaking-subscribe').prepend('Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.');

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
    $('#breaking-subscribe').html('<p>Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.</p>');
  } else {
    $('#breaking-subscribe').html('Submission failed, please contact directly.');
  }

}
