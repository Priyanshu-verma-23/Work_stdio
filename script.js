var timeLine = gsap.timeline();

timeLine.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
})
timeLine.from(".yellow2", {
    top: "100%",
    delay: 0.6,
    duration: 0.4,
    ease: "expo.out",
}, "sahil")
timeLine.to(".loader h1", {
    delay: 0.6,
    color: "black",
    duration: 0.5,
    ease: "expo.out",
}, "sahil")
timeLine.to(".loader", {
    delay: 0.5,
    display: "none",
})



// Locomotive

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



var elems = document.querySelectorAll(".elem")
var page2 =  document.querySelector(".page2")
elems.forEach(function(ele){
     ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage =  `url(${bgimg})`
        
     })
})