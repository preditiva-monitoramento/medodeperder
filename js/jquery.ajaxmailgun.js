/**/

var mailgunURL;

mailgunURL = window.location.protocol + "//" + window.location.hostname + '/mailgun.php';

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
