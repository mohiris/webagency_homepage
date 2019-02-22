window.addEventListener("load", function() {
  TweenMax.to(".left", 2, {
    delay: 1.5,
    top: "-150%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".left h2", 2, {
    delay: 1,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  });

  TweenMax.to(".right", 2, {
    delay: 2,
    top: "+100%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".right h2", 2, {
    delay: 1,
    opacity: 0,
    y: +60,
    ease: Expo.easeInOut
  });

  TweenMax.from("nav", 2, {
    delay: 3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  });

  TweenMax.from(".social", 2, {
    delay: 3,
    opacity: 0,
    x: 360,
    ease: Expo.easeInOut
  });

  TweenMax.from("h1", 2, {
    delay: 3,
    opacity: 0,
    x: 360,
    ease: Expo.easeInOut
  });
});
