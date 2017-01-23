$('input').keyup(function() {
  var IIR = parseFloat($('.IIR').val()) || 0;
  var IIQ = parseFloat($('.IIQ').val()) || 0;
  var ratio = ((IIR / 100 + 1) * (IIQ / 100 + 1)).toFixed(3);
  $('.ratio').html(ratio);
});

$('.save').click(function() {
  $('<div>' + $('.ratio').text() + '</div>').insertAfter('.save');
  $('.right').find('div').slice(4).remove();
});

$('.fa').click(function() {
  $('.IIR').val("");
  $('.IIQ').val("");
  $('.ratio').text("1.000");
  $('<div></div>').insertAfter('.save');
  $('<div></div>').insertAfter('.save');
  $('<div></div>').insertAfter('.save');
  $('.right').find('div').slice(4).remove();
});