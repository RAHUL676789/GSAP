let path = "M 10 80 Q 500 75, 900 80"
let finalPath = 'M 10 80 Q 500 75, 900 80'


document.querySelector("#string").addEventListener("mousemove", (dets) => {
    console.log(dets)
    path = `M 10 80 Q ${dets.x} ${dets.y}, 900 80`
    gsap.to(" svg  path", {
        attr: { d: path },
        duration: 2.5,
        ease: "elastic.out(1,0.3)"
    })
})


document.querySelector("#string").addEventListener("mouseleave", (dets) => {
   
    gsap.to(" svg  path", {
        attr: { d: finalPath },
        duration: 2,
        ease: "elastic.out(1,0.1)"
    })
})