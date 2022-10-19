$('#aboutMe').fadeOut(0);
$('#mySkills').fadeOut(0);
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

    if (y > 0) {
        $('#aboutMe').fadeIn();
    } if (y < 0.05) {
        $('#aboutMe').fadeOut();
    }

    if (y > 0.30) {
        $('#mySkills').fadeIn();
    } if (y < 0.20) {
        $('#mySkills').fadeOut();
    }

    if (y > 0.55) {
        $('#projects').fadeIn();
    } if (y < 0.45) {
        $('#projects').fadeOut();
    }

    if (y > 0.80) {
        $('#contact').fadeIn();
    } if (y < 0.70) {
        $('#contact').fadeOut();
    }

    $("#scrolldistance").text(y.toFixed(2))
});
