$(document).ready(function () {
  $(".slides").slick({
    //   setting-name: setting-value
    // adaptiveHeight: true,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    // responsive: [
    //   {
    //     breakpoint: 930,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 524,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    // ],
  });

  $(".menu__burger-menu").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  //   $("#pagepiling").pagepiling();

  $("#pagepiling").pagepiling({
    menu: null,
    direction: "vertical",
    verticalCentered: false,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: "#000",
      bulletsColor: "#f3ca2f",
      position: "right",
      tooltips: ["INTRODUCE", "section2", "section3", "section4"],
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,
  });

  //   $("#pagepiling").pagepiling({
  //     // sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
  //   });
});
