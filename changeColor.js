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
    $("#changedColor").text(rgb2hex(getComputedStyle(document.documentElement).getPropertyValue('--main')))
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

changeColor()

setInterval(function(){changeColor()}, 15000)

setInterval(function(){
    let time = '#'+(
        Math.floor(Date.now()/1000)%16777216)
            .toString(16)
            .split('').map(function(v) {
                return v
              })
            .join('')
            
    $('#hex-time').text( time ).css('background-color',time)
    //console.log( time )
}, 1000)