gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top",
    end: "+=3000",
    pin: true,
    markers: true,
    scrub: 1,
  },
});

tl.to(".horizontal", { x: -3850 });
