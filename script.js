// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline();

    let xTransfrom = gsap.utils.random(-100, 100);
    tl
      .set(image, {
        transformOrigin: `${xTransfrom < 0 ? 0 : '100%'}`,
      }, "start")
      .to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
      }, "start")
      .to(elem,{
        xPercent: xTransfrom,
        ease: "Power4.easeInOut",
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top top",
            scrub: true,
        }
      }, "start")
});

