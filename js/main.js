  var swiper = new Swiper(".slider_box", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay:2000,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true ,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
//   var swiper = new Swiper(".slider_box", {
//     grabCursor: true,
//     effect: "creative",
//     loop: true,
//     // speed: 1000,
//     // autoplay: {
//     //     delay:2000,
//     // },
//     creativeEffect: {
//       prev: {
//         shadow: true,
//         translate: [0, 0, -400],
//       },
//       next: {
//         translate: ["100%", 0, 0],
//       },
//     },
//   });