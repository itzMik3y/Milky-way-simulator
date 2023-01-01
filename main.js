const venus=document.querySelector("#venus")
const mecury=document.querySelector("#mecury")
const sun=document.querySelector('#sun-rot')
const earth=document.querySelector('#earth')
const mars=document.querySelector('#mars')
const jupiter=document.querySelector('#jupiter')
const saturn=document.querySelector("#saturn")
const uranus=document.querySelector('#uranus')
const neptune=document.querySelector('#neptune')

let neptune_rotation=0
let mecury_rotation=0
let venus_rotation=0
let earth_rotation=0
let mars_rotation=0
let jupiter_rotation=0
let saturn_rotation=0
let uranus_rotation=0

var rotationInterval=setInterval(()=>{
    mecury_rotation+=0.05
    venus_rotation+=0.019 //2.63
    earth_rotation+=0.011 //1.62
    mars_rotation+=0.006 //1.83
    jupiter_rotation+=0.0009 //6.3
    saturn_rotation+=0.0003 //2.48
    uranus_rotation+=0.0001 //2.85
    neptune_rotation+=0.00005 //1.96
    mecury.style.transform=`rotate(${mecury_rotation}deg)`
    sun.style.transform=`rotate(${-mecury_rotation}deg)`
    venus.style.transform=`rotate(${venus_rotation}deg)`
    earth.style.transform=`rotate(${earth_rotation}deg)`
    mars.style.transform=`rotate(${mars_rotation}deg)`
    jupiter.style.transform=`rotate(${jupiter_rotation}deg)`
    saturn.style.transform=`rotate(${saturn_rotation}deg)`
    uranus.style.transform=`rotate(${uranus_rotation}deg)`
    neptune.style.transform=`rotate(${neptune_rotation}deg)`
    
},1)