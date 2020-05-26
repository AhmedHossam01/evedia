$(function () {
  // To initialize the nice scroll plugin
  $("body").niceScroll({
    cursorcolor: "#424242",
    cursoropacitymax: 0.8,
    cursorborder: "0px solid #fff",
    zindex: 99999999,
  });

  // A function to change the navbar styling when user scrolls
  var checkScroll = function () {
    if ($(window).scrollTop() > $(".main-info").innerHeight()) {
      $("nav").addClass("shadow-md navbar-scrolled");
      $("nav").css("margin-top", 0);
      $(".main-info").fadeOut(200);
    } else {
      $("nav").removeClass("shadow-md navbar-scrolled");
      $("nav").css("margin-top", $(".main-info").innerHeight());
      $(".main-info").fadeIn(200);
    }
  };

  checkScroll();

  $(window).on("scroll", function () {
    checkScroll();
  });

  if ($(window).scrollTop() > $(".main-info").innerHeight()) {
    $("nav").addClass("shadow-md navbar-scrolled");
  } else {
    $("nav").css("margin-top", $(".main-info").innerHeight());
  }

  // A function to add additional background color when open the hamburger menu in small screens
  $(".navbar-toggler").on("click", function () {
    $("nav").toggleClass("navbar-toggler-clicked");
  });

  // A function to hide navbar menu when click on a link on small screens
  if (window.innerWidth <= 992) {
    $("a.navbar-link").on("click", function (e) {
      $("button.navbar-toggler").click();
    });
  }

  // A function to make the countdown timer
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Sep 30, 2021 00:00:00").getTime(),
    interval = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, second);

  // A function to make the su button and animate it on hover
  var getData = document.querySelectorAll(".button_su a"),
    getButtons = document.querySelectorAll(".button_su");

  for (let i = 0; i < getButtons.length; i++) {
    var buttonInner = document.createElement("div");
    buttonInner.innerHTML = `
            <span class="su_button_circle">
            </span>
            <a href="${getData[i].getAttribute(
              "href"
            )}" class="button_su_inner">
                <span class="button_text_container">
                    ${getData[i].innerText}
                </span>
            </a>
            `;
    getButtons[i].append(buttonInner);
  }

  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({ left: relX, top: relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });

  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({ left: relX, top: relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  // A function to make hover effect on character card
  $(".speaker").hover(
    function (e) {
      $(this).hoverFlow(
        e.type,
        $(this)
          .find(".speaker__img")
          .stop(true, true)
          .slideUp(function () {
            $(this).parent().find(".speaker__info__sub").fadeIn("fast");
          }),
        "fast"
      );
    },
    function (e) {
      $(this).hoverFlow(
        e.type,
        $(this)
          .find(".speaker__img")
          .stop(true, true)
          .slideDown(function () {
            $(this).parent().find(".speaker__info__sub").hide();
          }),
        "fast"
      );
    }
  );

  // A function to hide the loader page when the website loads all its content
  $(".loader").fadeOut(1000);

  // To initialize wow.js plugin
  new WOW({
    offset: 150,
  }).init();

  // To initialize slick slide plugin
  $(".speaker-cards").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // To make the schedule
  $(".schedule__button").on("click", function (event) {
    $(this).addClass("active").siblings().removeClass("active");
    $(".schedule__content > div").hide();
    $("#" + $(this).data("target")).fadeIn();
  });
});
