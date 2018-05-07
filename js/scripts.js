function go(input) {
  if ((input % 3 === 0 && input % 5 === 0)) {
    return ('pingpong');
  } else if (input % 5 === 0) {
    return ('pong');
  } else if (input % 3 === 0) {
    return ('ping');
  } else {
    return input;
  }
}


$(document).ready(function() {
  $('#value').click(function(action) {
    var userInput = parseInt($('input#integer').val());
    action.preventDefault();
    $('ul.list').empty();
    for (var input = 1; input <= userInput; input += 1) {
      $('ul.list').append('<li>' + go(input) + '</li>');
    }
  });
});
