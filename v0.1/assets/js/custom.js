jQuery(document).ready(function($) {
  "use strict";
  $(function() {
    $("#tabs").tabs();
  });


  // Page loading animation

  $("#preloader").animate({
    'opacity': '0'
  }, 600, function() {
    setTimeout(function() {
      $("#preloader").css("visibility", "hidden").fadeOut();
    }, 300);
  });


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  if ($('.owl-testimonials').length) {
    $('.owl-testimonials').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 800,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        460: {
          items: 1,
          margin: 0
        },
        576: {
          items: 2,
          margin: 20
        },
        992: {
          items: 2,
          margin: 30
        }
      }
    });
  }
  if ($('.owl-partners').length) {
    $('.owl-partners').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 1500,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        460: {
          items: 1,
          margin: 0
        },
        576: {
          items: 2,
          margin: 20
        },
        992: {
          items: 4,
          margin: 30
        }
      }
    });
  }

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  function visible(partial) {
    var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

  }

  $(window).scroll(function() {

    if (visible($('.count-digit'))) {
      if ($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');

      $('.count-digit').each(function() {
        var $this = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: $this.text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    }
  })
  $(window).scroll(function() {

    if (visible($('.count-digit1'))) {
      if ($('.count-digit1').hasClass('counter-loaded')) return;
      $('.count-digit1').addClass('counter-loaded');

      $('.count-digit1').each(function() {
        var $this1 = $(this);
        jQuery({
          Counter: 0
        }).animate({
          Counter: $this1.text()
        }, {
          duration: 300000000,
          easing: 'swing',
          step: function() {
            $this1.text(Math.ceil(this.Counter));
          }
        });
      });
    }
  })

});

// collapsible js for content in about page

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// $(".Modern-Slider").slick({
// 		autoplay:true,
// 		autoplaySpeed:10000,
// 		speed:600,
// 		slidesToShow:1,
// 		slidesToScroll:1,
// 		pauseOnHover:false,
// 		dots:true,
// 		pauseOnDotsHover:true,
// 		cssEase:'linear',
// 	 // fade:true,
// 		draggable:false,
// 		prevArrow:'<button class="PrevArrow"></button>',
// 		nextArrow:'<button class="NextArrow"></button>',
// });

const container = document.querySelectorAll(".box-cont");

container.forEach((element) => {
  element.addEventListener("mouseenter", function(event) {
    const element = event.target.querySelector(".box");
    const coords = getCoords(event.target.getBoundingClientRect());
    const radius = circleSize(event.target.getBoundingClientRect(), coords)

    circleConstraints(element, coords, radius)
    animation(element)
  });

  element.addEventListener("mouseleave", function(event) {
    const element = event.target.querySelector(".box");
    animationLeave(element);
  });
});

function animation(element) {
  const transform = [
    "scale(0)",
    "scale(1)"
  ];
  const options = {
    duration: 600,
    fill: "forwards",
    easing: "cubic-bezier(.2, 1, .2, 1)",
    iterations: 1
  };
  element.animate({
    transform
  }, options);
};

function animationLeave(element) {
  const transform = [
    "scale(1)",
    "scale(0)"
  ];
  const options = {
    duration: 400,
    fill: "forwards",
    easing: "cubic-bezier(.2, 1, .2, 1)",
    iterations: 1
  };
  element.animate({
    transform
  }, options);
};

function getCoords(rectangle) {
  return {
    x: rectangle.width * Math.random(),
    y: rectangle.height * Math.random(),
  }
};

function circleSize(rectangle, coords) {
  const x1 = coords.x;
  const y1 = coords.y;
  const rectCoords = [{
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: rectangle.height
    },
    {
      x: rectangle.width,
      y: 0
    },
    {
      x: rectangle.width,
      y: rectangle.height
    }
  ];

  return Math.max(...rectCoords.map((el) => {
    const x2 = el.x;
    const y2 = el.y;
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  }));
}

function circleConstraints(element, coords, radius) {
  element.style.height = radius * 2 + 'px';
  element.style.width = radius * 2 + 'px';
  element.style.top = coords.y - radius + 'px';
  element.style.left = coords.x - radius + 'px';
}

function refreshPage() {
  window.location.reload();
}
// #######################################

const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
  let addAnimation = false;
  // Elements that contain the "FLASH" class, add a listener to remove
  // animation-class when the animation ends
  if (element.classList[1] == "FLASH") {
    element.addEventListener("animationend", e => {
      element.classList.remove(ANIMATEDCLASSNAME);
    });
    addAnimation = true;
  }

  // If The span element for this element does not exist in the array, add it.
  if (!ELEMENTS_SPAN[index])
    ELEMENTS_SPAN[index] = element.querySelector("span");

  element.addEventListener("mouseover", e => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

    // Add an animation-class to animate via CSS.
    if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
  });

  element.addEventListener("mouseout", e => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
  });
});