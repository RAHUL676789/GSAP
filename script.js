// let tl = gsap.timeline();

// tl.from("h1",{
//     x:-40,
//     duration:0.3,
//     opacity:0,
//     delay:1,

// })
// tl.from("h4",{
//     y:-40,
//     duration:0.4,
//     opacity:0,
//     stagger:0.3

// })
// tl.from("#name",{
//     opacity:0,
//     duration:0.4,
//     y:-20
// })
// tl.from("#iind",{
//     opacity:0,
//     duration:0.4,
//     y:30,

// })
// tl.from(".pic",{
//     opacity:0,
//     duration:0.2,
//     scale:0,
//     rotate:-27
//     // x:60

// })



// gsap.from(".Skills h2", {
//   x: 100,
//   duration: 1,
//   stagger: 1,
//   opacity: 0,
//   delay: 1,
//   scrollTrigger: {
//     trigger: ".Skills h2",
//     scroller: "body",     // ✅ correct spelling
//     scrub: 2,
//     start: "top 80%",
//     end: "top 20%",
//     // markers: true   ,
//      toggleActions: "play none none reverse"      // ✅ also note: it's "markers" (plural)
//   }
// });
// page

// // gsap.registerPlugin(ScrollTrigger);

// gsap.to("#page3 h1", {
//      transform:" translateX(-150%)",
//     scrollTrigger: {
//         markers: true,
//         trigger: "#page3",
//         scroller: "body",
//         start: "top 30%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true
//     }
// });


gsap.to("#page2  h1",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        start:"top 0%",
        end:"top -100%",
        duration:2,
        pin:true


    }
})