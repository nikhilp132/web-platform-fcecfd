console.log('hello!');

$(document).ready(function() {});

function startGame() {
  $('.startButton').fadeOut();
  $('.platform1').animate({ left: '0px' }, function() {
    createBridge();
  });
}

function createBridge() {
  var platformDist = Math.random() * 100;
  var platformWidth = Math.random() * 100;
  console.log(platformDist);
  $('.mainContainer').append(
    '<div class="platforms platform2"><div class="bridge bridge2"></div></div>'
  );

  $('.platform2').css('margin-left', platformDist);
  $('.platform2').css('width', platformWidth);
}
