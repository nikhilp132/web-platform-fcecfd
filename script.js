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
  $('.mainContainer').append(
    '<div class="platforms"><div class="bridge"></div></div>'
  );
}
