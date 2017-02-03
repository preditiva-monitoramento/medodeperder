/**/

var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/medodeperder/mailgun.php';

$('.mailgun').on('submit',function(e) {
  e.preventDefault();

  $('.mailgun *').fadeOut(200);
  $('.mailgun').prepend('Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.');

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

  return false;

});

$('.mailgun2').on('submit',function(e) {
  e.preventDefault();

  $('.mailgun2 *').fadeOut(200);
  $('.mailgun2').prepend('Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.');

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

  return false;

});

$('.mailgun3').on('submit',function(e) {
  e.preventDefault();

  $('.mailgun3 *').fadeOut(200);
  $('.mailgun3').prepend('Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.');

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

  return false;

});

function responseSuccess(data) {

  data = JSON.parse(data);

  if(data.status === 'success') {
    $('.mailgun').html('<p>Obrigado por entrar em contato! Você receberá, em breve, um e-mail de um de nossos especialistas para a realização de um diagnóstico.</p>');
  } else {
    $('.mailgun').html('Submission failed, please contact directly.');
  }

}
