console.log('hello!');

$(document).ready(function() {
  // $('.mainContainer');
});

function startGame() {
  $('.platform1').animate({ left: '10px' }, function() {
    $('.startButton').css('display', 'none');
    createBridge();
  });
}

function createBridge() {
  $('.mainContainer').append(
    '<div class="platforms"><div class="bridge"></div></div>'
  );
}
