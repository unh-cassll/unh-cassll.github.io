



gsap.set(".wavy_curve", { opacity: 0 });
let x = 0.5;
gsap
  .timeline({ repeat: -1 })
  .set(".wavy_curve", { opacity: 1, stagger: x })
  .set(".wavy_curve", { opacity: 0, stagger: x }, x);