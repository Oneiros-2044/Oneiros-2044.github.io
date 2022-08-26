
function randInt(range){
    return Math.floor(Math.random()*range);
}

function changeColor(){
    let red = randInt(150)+100
    let green = randInt(100)+100
    let blue = randInt(150)+100
    //console.log(red,green,blue)

    let root = document.documentElement;

    root.style.setProperty('--main','rgb('+red+', '+green+', '+blue+')');
}

$('#aboutMe').fadeOut(0);
$('#projects').fadeOut(0);
$('#contact').fadeOut(0);

$(document).scroll(function() {
    let scrolltop = $(this).scrollTop();
    let maxpageheight = $(this).height();
    let deviceheight = $(window).height();
    let y = Math.floor(scrolltop / (maxpageheight - deviceheight)*20) / 20

    //console.log("maxpageheight: "+maxpageheight+" deviceheight: "+deviceheight)
    //console.log("scrolldistance: "+scrolltop+" percentage of page: "+y)
    //console.log()

    if (y > 0.15) {
        $('#aboutMe').fadeIn();
    } if (y < 0.05) {
        $('#aboutMe').fadeOut();
    }

    if (y > 0.25) {
        $('#projects').fadeIn();
    } if (y < 0.15) {
        $('#projects').fadeOut();
    }

    if (y > 0.75) {
        $('#contact').fadeIn();
    } if (y < 0.65) {
        $('#contact').fadeOut();
    }

    $("#scrolldistance").text(y.toFixed(2))
});

changeColor()

setInterval(function(){changeColor()}, 15000)