var isWeb;
var isTabl;
var isMobile;

function starPop() {
  $("#starPop").show();
  $("html").addClass("mHidden");
}
function starPopClose() {
  $("#starPop").hide();
  $("html").removeClass("mHidden");
}
function vetPop(index) {
  $("#vetPop" + index).show();
  $("html").addClass("mHidden");
}

function vetPopClose(index) {
  $("#vetPop" + index).hide();
  $("html").removeClass("mHidden");
}
function noticePop(index) {
  $("#noticePop" + index).show();
  $("html").addClass("mHidden");
}

function noticePopClose(index) {
  $("#noticePop" + index).hide();
  $("html").removeClass("mHidden");
}
function lamPop() {
  $("#lamPop").show();
  $("html").addClass("mHidden");
}
function lamPopClose() {
  $("#lamPop").hide();
  $("html").removeClass("mHidden");
}
function coPop() {
  $("#coPop").show();
  $("html").addClass("mHidden");
}
function coPopClose() {
  $("#coPop").hide();
  $("html").removeClass("mHidden");
}

$(function () {
  var _height = window.innerHeight;
  var _width = window.innerWidth;
  var _hh = $("#header").height();
  $(".mainVisual .swiper-wrapper").height(_height - _hh);
  $(window).on("scroll", function () {
    var _width = window.innerWidth;
    var _ms1 = $("#section1").size()
      ? $("#section1").offset().top - _hh
      : 0; /*사업분야*/
    var _ms2 = $("#section2").size()
      ? $("#section2").offset().top - _hh
      : 0; /*인사말*/
    var _ms3 = $("#section3").size()
      ? $("#section3").offset().top - _hh
      : 0; /*라미네이트*/
    var _ms3_2 = $("#section3_2").size()
      ? $("#section3_2").offset().top - _hh
      : 0; /*라미네이트*/
    var _ms3_3 = $("#section3_3").size()
      ? $("#section3_3").offset().top - _hh
      : 0; /*라미네이트*/
    var _ms3_4 = $("#section3_4").size()
      ? $("#section3_4").offset().top - _hh
      : 0; /*라미네이트*/
    var _ms3_5 = $("#section3_5").size()
      ? $("#section3_5").offset().top - _hh
      : 0; /*라미네이트*/
    var _ms4 = $("#section4").size()
      ? $("#section4").offset().top - _hh
      : 0; /*교정*/
    var _ms4_2 = $("#section4_2").size()
      ? $("#section4_2").offset().top - _hh
      : 0; /*교정*/
    var _ms4_3 = $("#section4_3").size()
      ? $("#section4_3").offset().top - _hh
      : 0; /*교정*/
    var _ms4_4 = $("#section4_4").size()
      ? $("#section4_4").offset().top - _hh
      : 0; /*교정*/
    var _ms4_5 = $("#section4_5").size()
      ? $("#section4_5").offset().top - _hh
      : 0; /*교정*/
    var _ms5 = $("#section5").size()
      ? $("#section5").offset().top - _hh
      : 0; /*임플란트*/
    var _ms5_2 = $("#section5_2").size()
      ? $("#section5_2").offset().top - _hh
      : 0; /*임플란트*/
    var _ms5_3 = $("#section5_3").size()
      ? $("#section5_3").offset().top - _hh
      : 0; /*임플란트*/
    var _ms5_4 = $("#section5_4").size()
      ? $("#section5_4").offset().top - _hh
      : 0; /*임플란트*/
    var _ms5_5 = $("#section5_5").size()
      ? $("#section5_5").offset().top - _hh
      : 0; /*임플란트*/
    var _ms5_6 = $("#section5_6").size()
      ? $("#section5_6").offset().top - _hh
      : 0; /*임플란트*/
    var _ms6 = $("#section6").size()
      ? $("#section6").offset().top - _hh
      : 0; /*with스타*/
    var _ms7 = $("#section7").size()
      ? $("#section7").offset().top - _hh
      : 0; /*오시는길*/
    var _ms8 = $("#section8").size()
      ? $("#section8").offset().top - _hh
      : 0; /*영업시간*/
    var _ms9 = $("#section9").size()
      ? $("#section9").offset().top - _hh
      : 0; /*둘러보기*/
    if ($(window).scrollTop() > _ms1 * 0.5) {
      $("#section1").addClass("active");
      $("#section1 .clinic li").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 50 * index);
      });
    }
    if ($(window).scrollTop() > _ms1 * 1.5) {
      $("#section2").addClass("active");
      $("#section2 .intro .doctor").addClass("on");
    }
    if ($(window).scrollTop() > _ms3 - _height * 0.5) {
      $("#section3").addClass("active");
      setTimeout(function () {
        $("#section3 .num").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section3 .mCopy1").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section3 .mCopy2").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section3 .mCopy1").addClass("on");
      }, 200 * 3);
      $("#section3 .point li").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 4));
      });
    }
    if ($(window).scrollTop() > _ms3_2 - _height * 0.5) {
      $("#section3_2").addClass("active");
      setTimeout(function () {
        $("#section3_2 .img").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section3_2 .int").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section3_2 .intCont").addClass("on");
      }, 200 * 3);
      $("#section3_2 .cont dl").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 4));
      });
    }
    if ($(window).scrollTop() > _ms3_3 - _height * 0.5) {
      $("#section3_3").addClass("active");
      setTimeout(function () {
        $("#section3_3 .int").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section3_3 .intCont").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section3_3 .step-container").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section3_3 .stepDes").addClass("on");
      }, 200 * 3);
    }
    if ($(window).scrollTop() > _ms3_4 - _height * 0.5) {
      $("#section3_4").addClass("active");
      setTimeout(function () {
        $("#section3_4 .int").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section3_4 .intCont").addClass("on");
      }, 200 * 2);
    }
    if ($(window).scrollTop() > _ms3_5 - _height * 0.5) {
      $("#section3_5").addClass("active");
    } else {
      $("#section3_5").removeClass("active");
    }
    if ($(window).scrollTop() > _ms4 - _height * 0.5) {
      $("#section3_5").removeClass("active");
      $("#section4").addClass("active");
      setTimeout(function () {
        $("#section4 .num").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section4 .mCopy1").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section4 .mCopy2").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section4 .mCopy3").addClass("on");
      }, 200 * 3);
      $("#section4 .point li").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 4));
      });
    }
    if ($(window).scrollTop() > _ms4_2 - _height * 0.5) {
      $("#section4_2").addClass("active");
      setTimeout(function () {
        $("#section4_2 h3").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section4_2 .mark").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section4_2 .btmCont").addClass("on");
      }, 200 * 3);
      setTimeout(function () {
        $("#section4_2 .abClear div img").addClass("on");
      }, 200 * 4);
      setTimeout(function () {
        $("#section4_2 .abClear .cont h4").addClass("on");
      }, 200 * 5);
      $("#section4_2 .abClear dl").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 6));
      });
    }
    if ($(window).scrollTop() > _ms4_3 - _height * 0.5) {
      setTimeout(function () {
        $("#section4_3").addClass("active");
      }, 600);
      $("#section4_3 .before").addClass("on");
      setTimeout(function () {
        $("#section4_3 .after").addClass("on");
      }, 300);
    }
    if ($(window).scrollTop() > _ms4_4 - _height * 0.5) {
      setTimeout(function () {
        $("#section4_4").addClass("active");
      }, 600);
      $("#section4_4 .after").addClass("on");
      setTimeout(function () {
        $("#section4_4 .before").addClass("on");
      }, 300);
    }
    if ($(window).scrollTop() > _ms4_5 - _height * 0.7) {
      $("#section4_5").addClass("active");
      setTimeout(function () {
        $("#section4_5 .int").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section4_5 .intCont").addClass("on");
      }, 200 * 2);
    }
    if ($(window).scrollTop() > _ms5 - _height * 0.5) {
      $("#section5").addClass("active");
      setTimeout(function () {
        $("#section5 .num").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section5 .mCopy1").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section5 .mCopy2").addClass("on");
      }, 200 * 3);
      setTimeout(function () {
        $("#section5 .mCopyLogo").addClass("on");
      }, 200 * 4);
      setTimeout(function () {
        $("#section5 .mCopy3").addClass("on");
      }, 200 * 5);
    }
    if ($(window).scrollTop() > _ms5_2 - _height * 0.7) {
      $("#section5_2").addClass("active");
      $("#section5_2 .int").addClass("on");
      setTimeout(function () {
        $("#section5_2 .intCont").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section5_2 .fl").addClass("on");
      }, 200 * 2);
      setTimeout(function () {
        $("#section5_2 .fr").addClass("on");
      }, 200 * 3);
    }
    if ($(window).scrollTop() > _ms5_3 - _height * 0.7) {
      $("#section5_3").addClass("active");
      $("#section5_3 .fl").addClass("on");
      setTimeout(function () {
        $("#section5_3 .fr .fimg").addClass("on");
      }, 200);
      $("#section5_3 .fr .fWrap div").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 2));
      });
    }
    if ($(window).scrollTop() > _ms5_4 - _height * 0.7) {
      $("#section5_4").addClass("active");
      setTimeout(function () {
        $("#section5_4 .int").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section5_4 .intCont").addClass("on");
      }, 200 * 2);
      $("#section5_4 .fact li").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 3));
      });
    }
    if ($(window).scrollTop() > _ms5_5 - _height * 0.7) {
      $("#section5_5").addClass("active");
      $("#section5_5 .fl").addClass("on");
      setTimeout(function () {
        $("#section5_5 .fr .fimg").addClass("on");
      }, 200);
      $("#section5_5 .fr .fWrap div").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 2));
      });
    }
    if ($(window).scrollTop() > _ms5_6 - _height * 0.7) {
      $("#section5_6").addClass("active");
      setTimeout(function () {
        $("#section5_6 .int").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section5_6 .intCont").addClass("on");
      }, 200 * 2);
      $("#section5_6 .fact li").each(function (index) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("on");
        }, 200 * (index + 3));
      });
    }

    if ($(window).scrollTop() > _ms6 - _height * 0.5) {
      $("#section6").addClass("active");
      mySwiper.autoplay.start();
      setTimeout(function () {
        $("#section6 h2").addClass("on");
      }, 200);
      setTimeout(function () {
        $("#section6 .h2cont").addClass("on");
      }, 200 * 2);
    }
  });
});
