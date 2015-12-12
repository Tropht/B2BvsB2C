// $('.redButton').click(function(){
//   $('#b2b').animate({left: '-=150px'});
// })

var rightButton = $('#rightButton');
var leftButton = $('#leftButton');

function scrollRight()
{
    $('#b2b').animate({left: '-=50px'}, 100, "linear", scrollRight);
    console.log("Right Scroll");
}
function scrollLeft()
{
    $('#b2b').animate({left: '+=50px'}, 100, "linear", scrollLeft);
    console.log("Left Scroll");
}

function stopScrolling()
{
  console.log('stop');
    $('#b2b').stop();
}

rightButton.mousedown(scrollRight).mouseup(stopScrolling);
leftButton.mousedown(scrollLeft).mouseup(stopScrolling);
