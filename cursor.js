
let cursor = document.querySelector("#cursor");
document.querySelector("#main").addEventListener("mousemove",(dets)=>{
    console.log(dets)
     gsap.to("#main #cursor",{
        x:dets.x,
        y:dets.y,
        backgroundColor:`rgb(${dets.x % 255} , ${dets.y % 255} , ${(dets.x + dets.y) % 255})`,
        duration:2,
       ease: "elastic.out(1,0.3)"
        
     })
})