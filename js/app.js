particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  anchors:['page'],
  controlArrows: false
});

gsap.from("#nama", {duration: 5, text: ""});
gsap.to("#nama", {duration: 5, text: "Developer", delay: 5});