console.log('hello!');

$(document).ready(function() {
  // $('.mainContainer');
});

function startGame() {
  $('.startButton').fadeOut();
  $('.platform1').animate({ left: '10px' }, function() {
    createBridge();
  });
}

function createBridge() {
  var platformDist = Math.random();

  console = $('.mainContainer').append(
    '<div class="platforms"><div class="bridge bridge2"></div></div>'
  );
}
