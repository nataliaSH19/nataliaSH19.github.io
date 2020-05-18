$(document).ready(function () {
  $("#scroll, #header__nav").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate(
      {
        scrollTop: top,
      },

      1000
    );
  });
});

$(function () {
  $(".js-nav-toggle").on("click", function () {
    $(this).toggleClass("toggler__icon--open");
    $(".js-nav").toggleClass("header__nav--open");
  });
});

$(function () {
  $(".js-slider").slick({
    fade: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    speed: 800,
    dots: true,
    responsive: [
      {
        breakpoint: 1096,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".js-slider-news").slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 985,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".hide").hide();

  $(".btn-more").click(function () {
    $(this).toggleClass("opened").toggleClass("closed").prev().slideToggle();

    if ($(this).hasClass("opened")) {
      $(this).html("less details");
    } else {
      $(this).html("more details");
    }
  });
});
$(window).scroll(function () {
  var sticky = $(".header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});
